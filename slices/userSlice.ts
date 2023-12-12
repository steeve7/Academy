import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/getAllUsers', async (thunkApi) => {
    const response = await fetch('https://freetestapi.com/api/v1/books?limit=5')
    const data = await response.json();
    return data;
})

const initialState = {
    entities:[]
} as any

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.entities.push(...action.payload)
        })
    }
});

export default userSlice.reducer