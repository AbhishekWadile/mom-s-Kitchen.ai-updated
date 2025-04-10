import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addItem : (state,action)=>{
            state.push(action.payload)
        },
        removeItem: (state,action)=>{
            state.pop(action.payload)
        }
    }
})
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer;