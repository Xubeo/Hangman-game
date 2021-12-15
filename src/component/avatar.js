import React from 'react'

export default function avatar(props) {
    const url = `https://avatars.dicebear.com/api/adventurer/${props.value}.svg`
    return (
        <div>
            <img src={url} width="200" height="200" alt="name"></img>
        </div>
    )
}
