import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;

		// 1. 현재 선택한 toDo를 찾는 방법
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { text, id, category: name };
			// console.log(targetIndex, newToDo);
			return oldToDos;
		});
	};

	return (
		<li>
			<span>{text}</span>
			{category !== "DOING" && (
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
