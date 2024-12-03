import React, { useState } from "react";
import { Todo } from "../../Models/Todos";
import { nanoid } from "nanoid";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import InputField from "./InputField";
import TodoList from "./TodoList";
import styles from "../../Styles/TodoPage/TodoPageStyles.module.css";

function TodoPage() {
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
      <div className={styles.TodoPage}>
        <div className={styles.heading}>
          <div className={styles.title}>
            <span className={styles.letters}>S</span>
            <span className={styles.letters}>u</span>
            <span className={styles.letters}>n</span>
            <span className={styles.letters}>n</span>
            <span className={styles.letters}>y</span>
            <span className={styles.letters}>'</span>
            <span className={styles.letters}>s</span>
            <span className={styles.break}>||</span>
            <span className={styles.letters}>Q</span>
            <span className={styles.letters}>u</span>
            <span className={styles.letters}>e</span>
            <span className={styles.letters}>s</span>
            <span className={styles.letters}>t</span>
            <span className={styles.letters}>s</span>
          </div>
          <div className={styles.tabOptions}>
            <a href={"/"}>
              <button className={styles.TabButtons}>❌</button>
            </a>
          </div>
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
}

export default TodoPage;
