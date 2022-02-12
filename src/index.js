import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {id: 1, name: "Stas"},
    {id: 2, name: "Vlad"},
    {id: 3, name: "Lena"},
    {id: 4, name: "Katya"},
    {id: 5, name: "Misha"},
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "yo"},
    {id: 4, message: "man, answer please"},
    {id: 5, message: "come on"},
]

let posts = [
    {id: 1, post: "Hello there", likesCount: 15},
    {id: 2, post: "I'm here", likesCount: 150},
    {id: 3, post: "I'm there", likesCount: 1500},
    {id: 4, post: "I'm everywhere", likesCount: 15000},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
