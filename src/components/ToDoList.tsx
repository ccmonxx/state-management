import { useForm } from "react-hook-form";
/*
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
 */

/*
register : form 태그가 갖고있는 속성들을 사용할 수 있게 해준다
usage : 객체를 만들고, regiseter 함수를 spread해서 넣는다(ES6)
watch : form의 입력값의 변화를 관찰하는 함수
*/

function ToDoList() {
	const { register, watch } = useForm();
	console.log(watch());

	return (
		<div>
			<form>
				<input {...register("username")} placeholder="Username" />
				<input {...register("email")} placeholder="Email" />
				<input {...register("password")} placeholder="Password" />
				<input {...register("password1")} placeholder="Password1" />
				<button>✓</button>
			</form>
		</div>
	);
}

export default ToDoList;
