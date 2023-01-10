import { useState } from "react";

function ToDoList() {
	const [toDo, setToDo] = useState("");
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		// setToDo(event.currentTarget.value);
		const {
			currentTarget: { value },
		} = event;
		setToDo(value);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(toDo);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={toDo} onChange={onChange} placeholder="Write a to do" />
				<button>✓</button>
			</form>
		</div>
	);
}

export default ToDoList;
