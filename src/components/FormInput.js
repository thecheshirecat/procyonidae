import React, { Component } from 'react';

class FormInput extends Component {
    render() {
        const {name, type, placeholder, value } = this.props;
        return (
            <div className="inputContainer">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => this.props.changeValue(name, e.target.value)} />
            </div>
        );
    }
}

export default FormInput;