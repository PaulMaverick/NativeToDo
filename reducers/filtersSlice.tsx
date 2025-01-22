import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type filters = {
    filter: string;
}

type filterState = {
    filters: filters[];

    ApplyFilterSuccess: boolean;
}

const initialState: filterState = {
    filters: [],
    ApplyFilterSuccess: false,
} 

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        onApplyFiltersSuccess: (state, action: PayloadAction<filters[]>) => {
            state.filters = action.payload;
            state.ApplyFilterSuccess = true;
        }
    }
})

export const { onApplyFiltersSuccess } = filtersSlice.actions;
export default filtersSlice.reducer;