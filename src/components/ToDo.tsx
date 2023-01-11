import { IToDo } from "../atoms";

function ToDo(toDo: IToDo) {
	return (
		<li>
			<span>{toDo.text}</span>
			<button>DOING</button>
			<button>TODO</button>
			<button>DONE</button>
		</li>
	);
}
export default ToDo;
