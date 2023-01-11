import { atom, selector } from "recoil";

export interface IToDo {
	id: number;
	text: string;
	category: "TODO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
});

// 1. 각 카테고리를 배열 형태로 나누어 반환()
export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDoState);
		return [
			toDos.filter((toDo) => toDo.category === "TODO"),
			toDos.filter((toDo) => toDo.category === "DOING"),
			toDos.filter((toDo) => toDo.category === "DONE"),
		];
	},
});
