import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    name: string,
    value: number
}

const initialState: CategoryState = {
    name: 'All',
    value: 0

}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.name = action.payload.name;
            state.value = action.payload.id;
          }
    }
}) 

export const {setCategory} = categorySlice.actions

export default categorySlice.reducer