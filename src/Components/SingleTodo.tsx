import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../Models/Todos";
import styles from "../Styles/SingleTodoStyles.module.css";
import { Draggable } from "react-beautiful-dnd";
import pencilIcon from "../Assets/pencilIcon.png";
import poopIcon from "../Assets/poopIcon.png";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDelete = (id: number | string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: string | number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id && editTodo.length <= 29
          ? { ...todo, todo: editTodo }
          : todo
      )
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className={styles.singleTodo}
          onSubmit={(e) => handleEdit(e, todo.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className={styles.singleTodoTextEditInput}
              maxLength={29}
              required
            />
          ) : todo.isDone ? (
            <s className={styles.singleTodoText}>{todo.todo}</s>
          ) : (
            <span className={styles.singleTodoText}>{todo.todo}</span>
          )}
          <div>
            <span
              className={styles.singleTodoIcon}
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <img
                className={styles.editIcon}
                src={pencilIcon}
                alt="editIcon"
              />
            </span>
            <span
              className={styles.singleTodoIcon}
              onClick={() => handleDelete(todo.id)}
            >
              <img
                className={styles.deleteIcon}
                src={poopIcon}
                alt="deleteIcon"
              />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
