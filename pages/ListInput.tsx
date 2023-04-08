import { useRef, useState } from 'react';


export default function ListInput() {
  const inputBox = useRef(null)
  const [todoInput, setTodoInput] = useState('')
  //const [sentListItem, setSentListItem] = useState(listItem)

  const handleChange = (event) => {
    setTodoInput(event.target.value);
  };

  async function addListElement () {
    console.log(todoInput)
    inputBox.current.value = ""
    inputBox.current.focus()
    if (todoInput != "") {
      await fetch("http://localhost:3000/api/todo", {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Connection': 'keep-alive',
          'Content-Type': 'application/json'
        },
        body: `{"title": "${todoInput}", "status": "todo"}`,
      })
    }
  }
async function removeChecked()  {

    let fetchedList

    await fetch("http://localhost:3000/api/todo").then(function (response) {
        return response.json();
    }).then(function (data) {
        fetchedList = data
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

    for (const item of fetchedList) {
      if (item && item.status == 'done') {
          console.log(item)
          await fetch(`http://localhost:3000/api/todo/${item.id}`, {
              method: 'DELETE',
              headers: {
                  'Accept': '*/*',
                  'Connection': 'keep-alive',
                  'Content-Type': 'application/json'
              }
          })
      }
  }

  }

  return (
    <div className="add-list">
      <input
        type="text"
        id="addItem"
        name="addItem"
        ref={inputBox}
        onChange={handleChange}
        value={todoInput}
      />
      <button type="button" onClick={addListElement}>
        Add Item
      </button>
      <button type="button" onClick={removeChecked}>
        Remove Checked
      </button>
    </div>

  )

}