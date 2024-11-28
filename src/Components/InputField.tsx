import React, { useRef } from "react";
import styles from "../Styles/InputFieldStyles.module.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        type="input"
        className={styles.inputBox}
        maxLength={29}
      />
      <button type="submit" className={styles.inputSubmit}>
        log
      </button>
    </form>
  );
};

export default InputField;
