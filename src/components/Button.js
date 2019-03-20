import React from 'react'

const Button = (props) => {
    return (
        <a className="button" href={props.href} onClick={ () => props.handleClick() }>{props.text}</a>
    )
}

export default Button