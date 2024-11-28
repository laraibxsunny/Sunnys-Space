import React, { useState } from "react";
import "./Styles/App.css";
import "./Styles/gruvbox-dark.css";
import InputField from "./Components/InputField";
import { Todo } from "./Models/Todos";
import { nanoid } from "nanoid";
import TodoList from "./Components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos.length + completedTodos.length >= 7) {
      setTodo("Too many Quests, relax");
    } else if (todo && todo.length <= 29) {
      setTodos([
        ...todos,
        {
          id: `task-${nanoid()}`,
          todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;

    if (source.droppableId === "activeQuestList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "activeQuestList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="heading">
          <span className="letters">S</span>
          <span className="letters">u</span>
          <span className="letters">n</span>
          <span className="letters">n</span>
          <span className="letters">y</span>
          <span className="letters">'</span>
          <span className="letters">s</span>
          <span className="break">||</span>
          <span className="letters">Q</span>
          <span className="letters">u</span>
          <span className="letters">e</span>
          <span className="letters">s</span>
          <span className="letters">t</span>
          <span className="letters">s</span>
        </div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
