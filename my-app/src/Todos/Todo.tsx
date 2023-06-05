import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Todo.css";

interface TodoProps {
  text: string;
  subTodos: TodoProps[];
}

const Todo: React.FC<TodoProps> = ({ text, subTodos }) => {
  const [newSubTodo, setNewSubTodo] = useState("");
  const [nestedTodos, setNestedTodos] = useState<TodoProps[]>(subTodos);
  const [collapse, setCollapse] = useState<boolean>(false);

  const handleAddSubTodo = () => {
    if (newSubTodo.trim() !== "") {
      setNestedTodos([...nestedTodos, { text: newSubTodo, subTodos: [] }]);
      setNewSubTodo("");
    }
  };

  const handleSubTodoChange = (index: number, newText: string) => {
    const updatedSubTodos = [...nestedTodos];
    updatedSubTodos[index].text = newText;
    setNestedTodos(updatedSubTodos);
  };

  const handleDeleteSubTodo = (index: number) => {
    const updatedSubTodos = [...nestedTodos];
    updatedSubTodos.splice(index, 1);
    setNestedTodos(updatedSubTodos);
  };

  return (
    <div className="todo-container">
      <div
        className={[
          "todo-header",
          !collapse ? "header-without-border" : "",
        ].join(" ")}
        onClick={() => setCollapse((prev) => !prev)}
      >
        <span>{text}</span>
      </div>
      {collapse && (
        <>
          <ul className="list">
            {nestedTodos.map((subTodo, index) => (
              <li key={index}>
                <div className="list-item">
                  <Input
                    value={subTodo.text}
                    onChange={(e) => handleSubTodoChange(index, e.target.value)}
                  />
                  <Button
                    onClick={() => handleDeleteSubTodo(index)}
                    type="secondary"
                  >
                    Delete
                  </Button>
                </div>

                <Todo {...subTodo} />
              </li>
            ))}
          </ul>
          <div className="subTodos">
            <Input
              value={newSubTodo}
              onChange={(e) => setNewSubTodo(e.target.value)}
              placeholder="Add Sub Todo"
            />
            <Button onClick={handleAddSubTodo} type={"primary"}>
              Add
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
