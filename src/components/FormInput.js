import React, { Component } from 'react';

class FormInput extends Component {
    render() {
        const {name, type, placeholder } = this.props;
        return (
            <div className="inputContainer">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={e => this.props.changeValue(name, e.target.value)} />
            </div>
        );
    }
}

export default FormInput;