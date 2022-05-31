import React from 'react'


type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props:PropsType) {
    return (
        <div>
            <div className="wrapper">
                <img src={props.avatar} alt="" className="avatar"/>
                <div className="message">
                    <h2>{props.name}</h2>
                    <span>{props.message}</span>
                    <span className="time">{props.time}</span>
                </div>
            </div>

        </div>
    )
}

export default Message
