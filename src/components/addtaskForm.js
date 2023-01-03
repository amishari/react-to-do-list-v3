import ErrorModal from "./errorModal";

import "../styles.css";

const AddTaskForm = ({
  newTask,
  setNewTask,
  addHandler,
  error,
  errorHandler
}) => {
  return (
    <div className="addTask">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <input
        // className={
        // 	newTask.length === 0
        // 		? ''
        // 		: newTask.match(lettets)
        // 		? 'isCorrect'
        // 		: 'isError'
        // }
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="addBtn" onClick={addHandler}>
        Add
      </button>
    </div>
  );
};
export default AddTaskForm;
