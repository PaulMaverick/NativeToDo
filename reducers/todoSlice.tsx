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

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        
    }
})

// export const {onCreateTodo} = todoSlice.actions;
export default todoSlice.reducer;