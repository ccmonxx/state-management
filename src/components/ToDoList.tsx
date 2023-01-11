import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

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

setError : 에러가 발생하는 경우 태그에 옵션(기능)을 설정할 수 있다
validate : 검사를 위한 조건을 설정할 수 있다
*/

interface IForm {
	toDo: string;
}

interface IToDo {
	id: number;
	text: string;
	catagory: "TODO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
});

function ToDoList() {
	const [toDos, setToDos] = useRecoilState(toDoState);

	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = ({ toDo }: IForm) => {
		// console.log(data.toDo);
		setToDos((oldToDos) => [
			{ text: toDo, id: Date.now(), catagory: "TODO" },
			...oldToDos,
		]);
		setValue("toDo", "");
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input
					{...register("toDo", { required: "Please write a To Do" })}
				/>
				<button>Add</button>
			</form>
			<ul>
				{toDos.map((toDo) => (
					<li key={toDo.id}>{toDo.text}</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
