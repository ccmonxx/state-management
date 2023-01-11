import { useForm } from "react-hook-form";
import styled from "styled-components";
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

handleSubmit : 제출 이벤트를 처리하는 함수(validation 완료되었을때만 호출)
formState : 제출 이벤트의 조건을 충족하지 못한 경우 에러 메세지 호출
(input의 조건이 HTML태그에 있는 경우 사용자 임의로 변경이 가능하기 때문에 조건은 자바스크립트로 위치)
*/

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

function ToDoList() {
	const { register, handleSubmit, formState } = useForm();
	const onValid = (data: any) => {
		console.log(data);
	};
	console.log(`Error`, formState.errors);

	return (
		<div>
			<Form onSubmit={handleSubmit(onValid)}>
				<input {...register("username", { required: true })} placeholder="Username" />
				<input {...register("email", { required: true })} placeholder="Email" />
				<input
					{...register("password", { required: true, minLength: 5 })}
					placeholder="Password"
				/>
				<input
					{...register("password1", {
						required: true,
						minLength: {
							value: 5,
							message: "Your password is too short.",
						},
					})}
					placeholder="Password1"
				/>
				<button>✓</button>
			</Form>
		</div>
	);
}

export default ToDoList;
