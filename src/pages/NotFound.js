import React from 'react'
import Error from '../components/Error';

export const NotFound = () => {
    return (
        <Error>
            <h1>
                <span>404!</span>
                Page not found!
            </h1>
            <p>Sorry! Looks like the page you were looking for does not exist!</p>
        </Error>
    )
}