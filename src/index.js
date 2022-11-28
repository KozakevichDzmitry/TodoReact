import React from 'react';
import ReactDOM from "react-dom/client";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamation, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import'./style.scss'

import App from './components/App'


library.add(
    faExclamation,
    faTrashCan,
    // more icons go here
);
const state = localStorage.getItem('state') || []
const data={
    title: 'Todo List',
    items:state
    //     [
    //     {
    //         key: 1,
    //         text: 'Drink Coffee',
    //         done: true,
    //         important: false,
    //         buttons: [
    //             {
    //                 key: '1-1',
    //                 class: 'todo-list__delete todo-list__button',
    //                 functional: 'delete',
    //                 icon:['solid',"trash-can"]
    //             },
    //             {
    //                 key: '1-2',
    //                 class: 'todo-list__important todo-list__button',
    //                 functional: 'important',
    //                 icon:['solid',"exclamation"]
    //             }
    //         ]
    //     },
    //     {
    //         key: 2,
    //         text: 'Make Awesome App',
    //         done: false,
    //         important: true,
    //         buttons: [
    //             {
    //                 key: '2-1',
    //                 class: 'todo-list__delete todo-list__button',
    //                 functional: 'delete',
    //                 icon:['solid',"trash-can"]
    //             },
    //             {
    //                 key: '2-2',
    //                 class: 'todo-list__important todo-list__button',
    //                 functional: 'important',
    //                 icon:['solid',"exclamation"]
    //             }
    //         ]
    //
    //     },
    //     {
    //         key: 3,
    //         text: 'Have a lunch',
    //         done: false,
    //         important: false,
    //         buttons: [
    //             {
    //                 key: '3-1',
    //                 class: 'todo-list__delete todo-list__button',
    //                 functional: 'delete',
    //                 icon:['solid',"trash-can"]
    //             },
    //             {
    //                 key: '3-2',
    //                 class: 'todo-list__important todo-list__button',
    //                 functional: 'important',
    //                 icon:['solid',"exclamation"]
    //             }
    //         ]
    //     }
    // ]
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>
);

