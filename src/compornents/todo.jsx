import React, { useState } from "react";
import "../styles/todo.css";

import Header from "./header";
import Footer from "./footer";

function Todo() {
  const initialstate = {
    id: 1,
    comment: "make program",
    status: "作業中",
  };
  const [todoList, setNewTodoList] = useState([initialstate]);
  const [todoText, setTodoText] = useState("");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [radio, setRadio] = useState("all");

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = {
      id: todoList.length + 1,
      comment: todoText,
      status: "作業中",
    };
    // DOMが更新される
    setNewTodoList([...todoList, newTodo]);

    // 入力フォーム内を""にする
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const deletedTodoList = [...todoList];
    deletedTodoList.splice(index, 1);
    setNewTodoList(deletedTodoList);
  };

  const onClickSwitch = (index) => {
    const switchTodoList = [...todoList];
    if (switchTodoList[index].status === "作業中") {
      switchTodoList[index].status = "完了";
    } else if (switchTodoList[index].status === "完了") {
      switchTodoList[index].status = "作業中";
    }
    setNewTodoList(switchTodoList);
  };

  const handleChange = (e) => {
    setRadio(e.target.value);
    if (e.target.value === "incomplete") {
      const incompleteTodoList = [...todoList].filter(
        (todo) => todo.status === "作業中"
      );
      setFilteredTodoList(incompleteTodoList);
    } else if (e.target.value === "complete") {
      const completeTodoList = [...todoList].filter(
        (todo) => todo.status === "完了"
      );
      setFilteredTodoList(completeTodoList);
    }
    return;
  };

  return (
    <>
      <Header />
      <main className="wrapper">
        <h1 className="title">Todo List</h1>
        <div className="form">
          <label htmlFor="todo">Todo</label>
          <input value={todoText} onChange={onChangeTodoText} />
          <button onClick={onClickAdd}>追加</button>
        </div>

        <div className="complete-area">
          <label>
            <input
              type="radio"
              value="all"
              onChange={handleChange}
              checked={radio === "all"}
            />
            すべて
          </label>
          <label>
            <input
              type="radio"
              value="incomplete"
              onChange={handleChange}
              checked={radio === "incomplete"}
            />
            作業中
          </label>
          <label>
            <input
              type="radio"
              value="complete"
              onChange={handleChange}
              checked={radio === "complete"}
            />
            完了
          </label>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>コメント</th>
              <th>状態</th>
            </tr>
          </thead>
          {radio === "all" ? (
            <tbody id="todo-body">
              {todoList.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.comment}</td>
                  <td>
                    <button onClick={() => onClickSwitch(index)}>
                      {todo.status}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody id="todo-body">
              {filteredTodoList.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.comment}</td>
                  <td>
                    <button onClick={() => onClickSwitch(index)}>
                      {todo.status}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </main>
      <Footer />
    </>
  );
}

export default Todo;
