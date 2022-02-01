import React from 'react'
import style from './ContainerLayout.css'

export default function ContainerLayout(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}
