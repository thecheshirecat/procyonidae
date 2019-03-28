import React, { Component } from 'react'

class FormTextarea extends Component {
    render () {
        const { name, placeholder, text } = this.props;
        return (
            <div className="inputContainer">
                <textarea
                    name={name}
                    placeholder={placeholder}
                    onChange={e => this.props.changeValue(name, e.target.value)}
                    value={text}>
                    {text}
                </textarea>
            </div>
        )
    }
}

export default FormTextarea