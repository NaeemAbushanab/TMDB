import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    AccessTokenAuth: " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDVmZTYzZjI0NTM5MTQ1NTYzYjMxOTgzZmZmZDFkNCIsInN1YiI6IjY1OWQwNWQxZjg1OTU4MDE0YzdjOTNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnbHEwyHUYizwbVvmSo0vh40SxWemjx5dz76_X9JC-k",
    accountId: 20911230,
    userDetalis: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers(bulider) {
        bulider.addCase(fetchUserDetalis.fulfilled, (state, action) => {
            state.userDetalis = action.payload
        })
    }
})

const fetchUserDetalis = createAsyncThunk('user/fetchUserDetalis', async () => {
    return axios.get(`${import.meta.env.VITE_API_URL}/account/${initialState.accountId}`, {
        headers: {
            Authorization: initialState.AccessTokenAuth
        },
    })
        .then(({ data }) => data);
})

const selectAccessTokenAuth = state => state.user.AccessTokenAuth

export default userSlice.reducer
export { fetchUserDetalis, selectAccessTokenAuth }