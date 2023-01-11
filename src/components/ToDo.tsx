import React from "react";
import { useRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
	const setToDos = useRecoilState(toDoState);
	// 복수의 button 태그의 이벤트를 사용할 때(button태그의 name으로 관리가능)
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		// console.log(event.currentTarget.name);
		const {
			currentTarget: { name },
		} = event;
	};
	// const onClick = (newCategory: IToDo["category"]) => {
	// 	console.log("I wanna go to", newCategory);
	// };

	return (
		<li>
			<span>{text}</span>
			{/* category가 DOING이 아닐때만 DOING버튼을 보여줘 */}
			{category !== "DOING" && (
				// <button name="DOING" onClick={() => onClick("DOING")}>
				<button name="DOING" onClick={onClick}>
					DOING
				</button>
			)}
			{category !== "TODO" && (
				<button name="TODO" onClick={onClick}>
					TODO
				</button>
			)}
			{category !== "DONE" && (
				<button name="DONE" onClick={onClick}>
					DONE
				</button>
			)}
		</li>
	);
}
export default ToDo;
