import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers : {
        toggleMode : (state)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const {toggleMode} = gptSlice.actions;
export default gptSlice.reducer;