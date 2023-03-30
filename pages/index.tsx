import Head from "next/head"
import Image from "next/image"
import {useEffect} from 'react';

export default function Home() {
  /*useEffect(() => {
    document.body.classList.add("todo-body")
  },[]);*/

  const addListElement = () => {
    console.log('test')
  }

  return (
    <>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="To-Do List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/img/favicon.png" />
      </Head>
      <div className="navbar">
        <a href="index.html">Home</a>
        {/*<a href="#Placeholder1">Placeholder</a>
  <a href="#Placeholder2">Placeholder</a>*/}
      </div>
      <div className="add-list">
        <input id="addItem" type="text" />{" "}
        <button type="button" onClick={addListElement}>
          Add Item
        </button>
        <button type="button">
          Remove Checked
        </button>
      </div>
      <div className="todo-list">
        <ul id="list"></ul>
      </div>
    </>
  )
}