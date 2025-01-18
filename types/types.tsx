export type TodoGroup = {
    id: number,
    title: string;
    description: string;
    todos: Todo[];
    reminder: boolean;
}

export type Todo = {
    id: number,
    todo: string;
    isDone: boolean;
}