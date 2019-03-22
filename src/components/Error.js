import React from 'react'

const Error = (props) => {
    return (
        <div className="notFound">
            {props.children}
        </div>
    )
}

export default Error