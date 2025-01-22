import { configureStore } from "@reduxjs/toolkit";
import todoGroupReducer from './todoGroupSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
    reducer: {
        todo: todoGroupReducer,
        filters: filtersReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;