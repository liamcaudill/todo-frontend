import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from 'react';
import TodoList from "./TodoList"
import Navbar from "./Navbar"
import ListInput from "./ListInput"

export default function Home() {
  

  return (
    <>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="To-Do List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/img/favicon.png" />
      </Head>
      <Navbar />
      <ListInput />
      <TodoList />
    </>
  )
}