import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoGroup, Todo } from "@/types/types";

type TodoState = {
    todoGroup: TodoGroup,
    createSuccess: boolean;
}

const initialState: TodoState = {
    todoGroup: {
        id: 0,
        title: '',
        description: '',
        todos: [],
        reminder: false,
    },

    createSuccess: false
}

const todoGroupSlice = createSlice({
    name: 'todoGroup',
    initialState: initialState,
    reducers: {
        onCreateTodoGroup(state, action: PayloadAction<TodoGroup>) {
            state.todoGroup = action.payload
        }
    }
})

export const {onCreateTodoGroup} = todoGroupSlice.actions;
export default todoGroupSlice.reducer;