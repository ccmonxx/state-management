import { atom } from "recoil";

export interface IToDo {
	id: number;
	text: string;
	catagory: "TODO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
});
