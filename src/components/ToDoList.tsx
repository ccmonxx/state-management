import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
	// 2. selector를 통해 나눈 카테고리 배열을 노출
	const [toDo, doing, done] = useRecoilValue(toDoSelector);

	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<h2>ToDo</h2>
			<ul>
				{toDo.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
			<h2>Doing</h2>
			<ul>
				{doing.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
			<h2>Done</h2>
			<ul>
				{done.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
		</div>
	);
}

export default ToDoList;
