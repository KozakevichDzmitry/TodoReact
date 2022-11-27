import TodoListItem from "./TodoListItem";

const TodoList = ({dataItems, filteredItemsIndex, onDelete, onToggleDone, onToggleImportant}) => {
    let items = dataItems
    if(filteredItemsIndex) items = filteredItemsIndex.map(index => items[index])

    items= items.map(item => {
        return (
            <li key={item.key} className='todo-list__item-wrapper list-group-item'>
                <TodoListItem item={item}
                              onDelete={() => {onDelete(item.key)}}
                              onToggleDone={() => onToggleDone(item.key)}
                              onToggleImportant={() => onToggleImportant(item.key)}
                />
            </li>
        )
    })

    return (
        <ul className="todo-list list-group mb-3">
            {items}
        </ul>

    )
}

export default TodoList