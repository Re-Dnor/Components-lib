import { SidebarListType, TodoListType } from "./types/Lists.types";

export const sidebarList: SidebarListType = ["Home", "Test form", "Todo list"];

export const todoList: TodoListType = new Array(40).fill(1).map((_, index) => `Current number is: ${index + 1}`);
