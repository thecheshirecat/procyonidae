    import React from 'react'

    const Button = (props) => {
        return (
            <button 
                className="button"
                onClick={ () => props.handleClick() } 
                disabled={props.isDisabled}>
                {props.text}
            </button>
        )
    }

    export default Button