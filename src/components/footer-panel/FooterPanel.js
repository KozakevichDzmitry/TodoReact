import React, {Component} from 'react'
import Input from "../Input";
import Button from "../Button";


export default class FooterPanel extends Component{
    state={
        label: ''
    }

    saveTextInput=(e)=>{
        this.setState({
            label: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if(this.state.label) {
            this.props.onAddItem(this.state.label)
            this.setState({label: ''})
        }
    }

    render(){
        return (
            <form className='footer-panel d-flex justify-content-between align-items-center gap-2'
                  onSubmit= {this.onSubmit}
            >
                <Input data={{
                    class: 'footer-panel__input',
                    placeholder: "What needs to be done",
                    type: 'search',
                    value: this.state.label,
                    onChange: this.saveTextInput
                }}/>
                <Button key='footer-panel-1'
                        data={{
                            class: 'footer-panel__button',
                            functional: 'add',
                            text: 'Add',
                            type: 'submit'
                        }}
                />
            </form>
        )
    }

}