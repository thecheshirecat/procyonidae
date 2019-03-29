import React, { Component } from 'react';

class FormMessages extends Component {
    render() {
        const error = this.props.error;
        var classMessage = 'success';
        if(error) {
            classMessage = 'error';
        }
        return (
            <div className={`formMessages ${classMessage}`}>
                {this.props.children}
            </div>
        );
    }
}

export default FormMessages;