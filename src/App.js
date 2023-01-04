import { useState } from 'react';
import ToDo from './components/toDo.js';
import AddTaskForm from './components/addtaskForm.js';
import UpdateForm from './components/updatedForm.js';

import './styles.css';

export default function App() {
	const [newTask, setNewTask] = useState('');
	const [toDo, setToDo] = useState([]);
	const [updated, setUpdated] = useState('');
	const [error, setError] = useState();

	const addHandler = () => {
		if (newTask) {
			let letters = /^[0-9-\u0600-\u06FF\s]+$/; /*only En Char: /^[a-zA-Z]+$/ */

			if (!letters.test(newTask)) {
				setError({
					title: 'خطای انتخاب زبان دستگاه',
					message: 'زبان را فارسی انتخاب کنید'
				});
				setNewTask('');
				return;
			}
			let num = toDo.length + 1;
			setToDo([...toDo, { id: num, title: newTask, status: false }]);
			setNewTask('');
		}
	};

	const markHandler = (id) => {
		setToDo(
			toDo.map((task) =>
				task.id === id ? { ...task, status: !task.status } : task
			)
		);
	};

	const delHandler = (id) => {
		setToDo(toDo.filter((task) => task.id !== id));
	};

	const changeTask = (e) => {
		let newEntry = {
			id: updated.id,
			title: e.target.value,
			status: updated.status ? true : false
		};

		setUpdated(newEntry);
	};

	const editHandler = (id) => {
		let filterRecords = [...toDo].filter((task) => task.id !== updated.id);
		let updatedObject = [...filterRecords, updated];
		setToDo(updatedObject);
		setUpdated('');
	};

	const cancelHandler = (id) => {
		setUpdated('');
	};

	return (
		<div className="App">
			<h1>To Do List</h1>
			{updated && updated ? (
				<UpdateForm
					updated={updated}
					changeTask={changeTask}
					editHandler={editHandler}
					cancelHandler={cancelHandler}
				/>
			) : (
				<AddTaskForm
					newTask={newTask}
					setNewTask={setNewTask}
					addHandler={addHandler}
					error={error}
					setError={setError}
					// errorHandler={errorHandler}
				/>
			)}
			{toDo ? '' : 'Nothing to display!'}
			<ToDo
				toDo={toDo}
				markHandler={markHandler}
				delHandler={delHandler}
				setUpdated={setUpdated}
			/>
		</div>
	);
}
