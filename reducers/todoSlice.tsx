import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@/types/types";

type TodoState = {
    todo: {
        title: string;
        description: string;
    }

    createSuccess: boolean;
}

const initialState: TodoState = {
    todo: {
        title: '',
        description: '',
    },

    createSuccess: false
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        onCreateTodo(state, action: PayloadAction<Todo>) {
            state.todo = action.payload
        }
    }
})

export const {onCreateTodo} = todoSlice.actions;
export default todoSlice.reducer;