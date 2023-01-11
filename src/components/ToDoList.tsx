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

errors 추출을 위해 formState를 비구조화 → 각 input 태그별 에러메세지 설정하기
정규표현식 패턴(Regular expressions) : 
^ : 문장의 시작
+ : 복수의 수량을 나타냄(a~z & 0~9 & . & _ & - 이중 1개 혹은 여러개의 문자열=OK)
예 : /^[A-Za-z0-9._-]+@naver.com$/

*/

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

// 1. type 선언
interface IForm {
	username: string;
	email: string;
	password: string;
	password1: string;
}

// 2. type 적용
function ToDoList() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({
		defaultValues: { email: "@naver.com" },
	});
	const onValid = (data: any) => {
		console.log(data);
	};

	// 3. 에러 메세지 노출
	return (
		<div>
			<Form onSubmit={handleSubmit(onValid)}>
				<input
					{...register("username", {
						required: "Write here",
					})}
					placeholder="Username"
				/>
				<span>{errors?.username?.message}</span>
				<input
					{...register("email", {
						required: "Write here",
						pattern: {
							value: /^[A-Za-z0-9._-]+@naver.com$/,
							message: "Only naver.com mails allowed",
						},
					})}
					placeholder="Email"
				/>
				<span>{errors?.email?.message}</span>
				<input
					{...register("password", {
						required: "Write here",
						minLength: 5,
					})}
					placeholder="Password"
				/>
				<span>{errors.password?.message}</span>
				<input
					{...register("password1", {
						required: "Password is required",
						minLength: {
							value: 5,
							message: "Your password is too short",
						},
					})}
					placeholder="Password1"
				/>
				<span>{errors.password1?.message}</span>
				<button>✓</button>
			</Form>
		</div>
	);
}

export default ToDoList;
