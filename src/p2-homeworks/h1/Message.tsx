import React from 'react'
import classes from './Message.module.css'

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props:PropsType) {
    return (
        <div>
            <div className={classes.wrapper}>
                <img src={props.avatar} alt="" className={classes.avatar}/>
                <div className={classes.message}>
                    <h2>{props.name}</h2>
                    <span>{props.message}</span>
                    <span className={classes.time}>{props.time}</span>
                </div>
            </div>

        </div>
    )
}

export default Message
