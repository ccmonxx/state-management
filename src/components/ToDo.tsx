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

			// 2. 카테고리가 변경된 toDo를 다시 반환하기
			const newToDo = { id, text, category: name as any };
			console.log(targetIndex); // >> index
			console.log(newToDo); // >> {toDo}
			return [
				...oldToDos.slice(0, targetIndex), // 0~현재 타겟의 앞까지
				newToDo,
				...oldToDos.slice(targetIndex + 1), // 현재 타겟부터 끝까지
			];
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
