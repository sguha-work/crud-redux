import { createSlice } from "@reduxjs/toolkit";
import { action_createUser, action_fetchUsers } from "../actions/user.action";
const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {
            users:[]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(action_createUser.fulfilled, (state, response)=>{
            state.data.users.push(response.payload)
        });
        builder.addCase(action_fetchUsers.fulfilled, (state, response)=>{
            state.data.users = response.payload;
        });
    },
});

export default userSlice.reducer;