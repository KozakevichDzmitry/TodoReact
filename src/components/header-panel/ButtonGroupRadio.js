import React, {Component} from 'react';

export default class ButtonGroupRadio extends Component {
    state = {
        buttons: [...this.props.data.dataButtonGroup],
    }
    handleChange = (e) => {
        this.setState((state) => {
            let buttons = [...state.buttons]
                .map((btn) => {
                    btn.checked = btn.id === e.target.id;
                    return btn
                })
            return {buttons: [...buttons]}
        })
        this.props.data.onFilter(e.target.dataset.filter)
    }

    render() {
        let {buttons} = this.state;
        buttons = buttons.reduce((acc, button) => {
            const className = `${button.class} ${button.checked ? 'active' : null}`
            acc.push(<input key={button.id} type="radio" className={className} data-filter={button.filter}  name="btnradio" id={button.id}
                            autoComplete="off" checked={button.checked} onChange={this.handleChange}/>)
            acc.push(<label key={'label' + button.id} className="btn btn-outline-primary"
                            htmlFor={button.id}>{button.text}</label>)
            return acc
        }, [])
        return (
            <div className='todo-list__group-button btn-group' role="group" aria-label="Basic mixed styles example">
                {buttons}
            </div>
        )
    }

}
