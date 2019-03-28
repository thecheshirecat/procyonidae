import React, { Component } from 'react'

class SmallForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render () {
        return (
            <form onSubmit={this.props.submit}>
                {this.props.children}
            </form>
        )
    }
}

export default SmallForm