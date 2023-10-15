import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            // jo bhi input parameter send kia h vo action.payload ko darshata hai
            state.push(action.payload);
        },
        remove:(state,action) => {
            // not understandable
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;