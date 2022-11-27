import Button from "../Button";
import React from 'react'

export default class TodoListItem extends React.Component {

    render() {
        const {item, onDelete,onToggleDone, onToggleImportant} = this.props
        const className = `todo-list__item d-flex justify-content-between align-items-center fw-semibold fs-5 ${item.important ? 'important' : ''} ${item.done ? 'done' : ''}`
        let {buttons} = item
        buttons = buttons.map((button) => {
            return (<Button key={button.key} data={{
                ...button,
                eventFunc: button.functional === 'delete' ? onDelete : onToggleImportant
            }}/>)
        })
        return (
            <div className={className}>
                <span className='todo-list__text' onClick={onToggleDone}>{item.text}</span>
                <div className='todo-list__group-button d-flex gap-2 align-items-center'>
                    {buttons}
                </div>
            </div>
        )
    }

}
