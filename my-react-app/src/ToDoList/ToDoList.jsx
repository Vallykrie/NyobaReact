import { useState } from "react";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["Belajar HTML", "Belajar CSS", "Belajar React"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.length == 0) return;
    setTasks(t => [...t, newTask]);
    setNewTask("");
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    const updatedTasks = [...tasks];
    [[updatedTasks[index - 1], updatedTasks[index]]] = [[updatedTasks[index], updatedTasks[index - 1]]];
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    const updatedTasks = [...tasks];
    [[updatedTasks[index], updatedTasks[index + 1]]] = [[updatedTasks[index + 1], updatedTasks[index]]];
    setTasks(updatedTasks);
  }

  return (
    <div className={styles.toDoList}>
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter  a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className={`${styles.addButton} ${styles.button}`} onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li className={styles.li} key={index}>
            <span className={styles.text}>{task}</span>
            <div>
              <button className={`${styles.removeButton} ${styles.button}`} onClick={() => removeTask(index)}>Remove</button>
              <button className={`${styles.moveButton} ${styles.button}`} onClick={() => moveTaskUp(index)}>👆</button>
              <button className={`${styles.moveButton} ${styles.button}`} onClick={() => moveTaskDown(index)}>👇</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
