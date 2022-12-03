import React, {Component} from 'react';
import Header from "./header/Header";
import TodoList from "./todo-list/TodoList";
import HeaderPanel from "./header-panel/HeaderPanel";
import FooterPanel from "./footer-panel/FooterPanel";

export default class App extends Component {
    maxKey = (() => {
        const getMax = (a, b) => Math.max(a, b.key);
        return this.props.data.items.reduce(getMax,0);
    })()
    state = {
        ...this.props.data,
        filter: 'all',
        searchText: ''
    }
    addToDoItem = (label) => {
        this.setState((state) => {
            let key = ++this.maxKey
            const newItem = {
                key: key,
                text: label,
                done: false,
                important: false,
                buttons: [
                    {
                        key: `${key}-1`,
                        class: 'todo-list__delete todo-list__button',
                        functional: 'delete',
                        icon: ['solid', "trash-can"]
                    },
                    {
                        key: `${key}-2`,
                        class: 'todo-list__important todo-list__button',
                        functional: 'important',
                        icon: ['solid', "exclamation"]
                    }
                ]
            }
            localStorage.setItem('state', JSON.stringify([...state.items, newItem]))
            return {
                items: [...state.items, newItem]
            }
        })

    }
    deleteItem = (key) => {
        this.setState((state) => {
            const newItems = state.items.reduce((acc, next) => {
                if (next.key !== key) acc.push(next)
                return acc
            }, [])
            localStorage.setItem('state', JSON.stringify(newItems))
            return {
                items: newItems
            }
        })
    }
    toggleCondition = (arr, condition, key) => {
        const index = arr.findIndex(item => item.key === key)
        let oldItem = arr[index]
        let newItem = {
            ...oldItem,
            [condition]: !oldItem[condition]
        }
        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]

    }
    toggleImportantCondition = (key) => {
        this.setState(({items}) => {
            return {
                items: this.toggleCondition(items, 'important', key)
            }
        })
    }
    toggleDoneCondition = (key) => {
        this.setState(({items}) => {
            return {
                items: this.toggleCondition(items, 'done', key)
            }
        })
    }
    calculateItems = () => {
        const {items} = this.state;
        const countDone = items.filter(item => item.done).length
        const countMoreToDo = items.length - countDone
        return {
            done: countDone,
            moreToDo: countMoreToDo
        }
    }
    setSearchText = (value) => {
        this.setState({searchText: value})
    }
    setFilter = (value) => {
        this.setState({filter: value})
    }
    search = (items, filteredItemsIndex, searchText) => {
        let searchItemsIndex = filteredItemsIndex || null;
        if (searchText) {
            if (searchItemsIndex) {
                searchItemsIndex = searchItemsIndex.filter((index) => items[index].text.toLowerCase().match(searchText.toLowerCase()))
            } else {
                searchItemsIndex = items.reduce((acc, item, index) => {
                    if (item.text.toLowerCase().match(searchText.toLowerCase())) acc.push(index)
                    return acc
                }, [])
            }
        }

        return searchItemsIndex
    }
    filter = (items, filter) => {
        let filteredItemsIndex;
        if (filter === 'active') {
            filteredItemsIndex = items.reduce((acc, item, index) => {
                if (!item.done) acc.push(index)
                return acc
            }, [])
        } else if (filter === 'done') {
            filteredItemsIndex = items.reduce((acc, item, index) => {
                if (item.done) acc.push(index)
                return acc
            }, [])
        } else if (filter === 'all') {
            filteredItemsIndex = null
        }
        return filteredItemsIndex

    }

    render() {
        const {items} = this.state
        const {moreToDo, done} = this.calculateItems()
        const dataHeader = {
            title: this.state.title,
            moreToDo: moreToDo,
            done: done,
        }
        let filteredItemsIndex = this.filter(items, this.state.filter)
        filteredItemsIndex = this.search(items, filteredItemsIndex, this.state.searchText)
        return (
            <div className='container mt-4 mb-4'>
                <Header dataHeader={dataHeader}/>
                <HeaderPanel onSearch={(val) => this.setSearchText(val)} onFilter={(val) => this.setFilter(val)}/>
                <TodoList dataItems={items}
                          filteredItemsIndex={filteredItemsIndex}
                          onDelete={this.deleteItem}
                          onToggleImportant={this.toggleImportantCondition}
                          onToggleDone={this.toggleDoneCondition}
                />
                <FooterPanel onAddItem={this.addToDoItem}/>
            </div>
        )
    }
}
