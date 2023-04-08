import { useEffect, useState } from 'react';
export default function TodoList() {
    const [todoList, setProductList] = useState([]);
    const [ids, setIds] = useState<Array<number>>([]);

    useEffect(() => {
        //var list
        fetch("http://localhost:3000/api/todo").then(function (response) {
            return response.json();
        }).then(function (data) {
            let localIds = []
            setProductList(data)
            for (var i of data) {
                if (i.status == "done") {
                    localIds.push(i.id)
                }

            }
            setIds(localIds)
        }).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    }, []);


    const selectTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedTodoId = parseInt(event.target.value);
        if (ids.includes(selectedTodoId)) {
            const newIds = ids.filter((id) => id !== selectedTodoId);
            setIds(newIds);
            fetch(`http://localhost:3000/api/todo/${selectedTodoId}`, {
                method: 'PUT',
                headers: {
                    'Accept': '*/*',
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/json'
                },
                body: `{"status": "done"}`,
            })
        } else {
            const newIds = [...ids];
            newIds.push(selectedTodoId);
            setIds(newIds);
            fetch(`http://localhost:3000/api/todo/${selectedTodoId}`, {
                method: 'PUT',
                headers: {
                    'Accept': '*/*',
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/json'
                },
                body: `{"status": "todo"}`,
            })
        }
    }

    return (
        <div className="todo-list">
            <ul>
                {
                    todoList.map(todo => (

                        <li key={todo.id}>
                            <input type="checkbox" value={todo.id} onChange={selectTodo} checked={ids.includes(todo.id) ? true : false} />
                            <label>{todo.title}</label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}