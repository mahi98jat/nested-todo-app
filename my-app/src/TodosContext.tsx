import React, { createContext, useState, useContext } from "react";

// Define the Todo type
type Todo = {
  text: string;
  subTodos: Todo[];
};

// Define the TodosContext type
export type TodosContextType = {
  nestedTodos: Todo[];
  handleAddSubTodo: (todo: string) => void;
  handleSubTodoChange: (index: number, text: string) => void;
  handleDeleteSubTodo: (index: number) => void;
};

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

// Create the TodosContext
export const TodosContext = createContext<TodosContextType>({
  nestedTodos: initialTodos,
  handleAddSubTodo: () => {},
  handleDeleteSubTodo: () => {},
  handleSubTodoChange: () => {},
});

// Create the TodosProvider component
export const TodosProvider: React.FC<any> = ({ children }) => {
  const [nestedTodos, setNestedTodos] = useState<Todo[]>(initialTodos);

  const handleAddSubTodo = (todo: string) => {
    if (todo.trim() !== "") {
      setNestedTodos((prevTodos) => [
        ...prevTodos,
        { text: todo, subTodos: [] },
      ]);
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

  const todosContextValue: TodosContextType = {
    nestedTodos,
    handleAddSubTodo,
    handleSubTodoChange,
    handleDeleteSubTodo,
  };

  return (
    <TodosContext.Provider value={todosContextValue}>
      {children}
    </TodosContext.Provider>
  );
};
