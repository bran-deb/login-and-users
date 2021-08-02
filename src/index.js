import React, { useState } from 'react';
import { render } from 'react-dom';

const Form = () => {
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");

    const sendForm = (ev) => {
        ev.preventDefalut()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'title',
                body: 'body',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <form onSubmit={(ev) => sendForm(ev)}>
            <div>
                <label htmlFor="title">Titulo{title}</label>
                <input type="text" id="title" onChange={(ev) => setTitle(ev.target.value)} />
            </div>
            <div>
                <label htmlFor="body">Publicacion {body}</label>
                <textarea id="body" onChange={(ev) => setBody(ev.target.value)}></textarea>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}

const Appp = () => {
    return <div><Form /></div>
}

render(<Appp />, document.getElementById('react-app'))