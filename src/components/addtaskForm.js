import ErrorModal from './errorModal';
import Card from './Crad';
import classes from './Card.module.css';

import '../styles.css';

const AddTaskForm = ({ newTask, setNewTask, addHandler, error, setError }) => {
	let letters = /^[0-9-\u0600-\u06FF\s]+$/;

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div className="addTask">
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.card}>
				<input
					className={
						newTask.length === 0
							? ''
							: newTask.match(letters)
							? 'isCorrect'
							: 'isError'
					}
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button className="addBtn" onClick={addHandler}>
					Add
				</button>
			</Card>
		</div>
	);
};
export default AddTaskForm;
