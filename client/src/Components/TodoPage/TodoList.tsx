import React from "react";
import styles from "../../Styles/TodoPage/TodoListStyles.module.css";
import {Todo} from "../../Models/Todos";
import SingleTodo from "./SingleTodo";
import {Droppable} from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className={styles.container}>
      <Droppable droppableId="activeQuestList">
        {(provided, snapshot) => (
          <div
            className={`${
              snapshot.isDraggingOver
                ? styles.dragActiveContainer
                : styles.activeQuests
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span
              id={`${
                snapshot.isDraggingOver
                  ? styles.dragActiveHeading
                  : styles.activeQuestsHeading
              }`}
            >
              Active Quests
            </span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="completedQuestList">
        {(provided, snapshot) => (
          <div
            className={`${
              snapshot.isDraggingOver
                ? styles.dragCompleteContainer
                : styles.completedQuests
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span
              id={`${
                snapshot.isDraggingOver
                  ? styles.dragCompleteHeading
                  : styles.completedQuestsHeading
              }`}
            >
              Completed Quests
            </span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={completedTodos}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
