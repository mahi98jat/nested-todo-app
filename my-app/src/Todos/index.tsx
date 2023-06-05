import React, { FC } from "react";
import Todo from "./Todo";

const Todos: FC = () => {
  const initialTodos = [
    {
      text: "Todo 1",
      subTodos: [
        {
          text: "Sub Todo 1.1",
          subTodos: [],
        },
        {
          text: "Sub Todo 1.2",
          subTodos: [],
        },
      ],
    },
    {
      text: "Todo 2",
      subTodos: [],
    },
  ];
  return (
    <div>
      <p>Todos :</p>
      <Todo text="Root Todo" subTodos={initialTodos} />
    </div>
  );
};

export default Todos;
