import { createAsyncThunk } from "@reduxjs/toolkit";
export const action_createUser = createAsyncThunk("createUser", async (response) => {
    return response;
});
export const action_fetchUsers = createAsyncThunk("fetchUsers", async (value) => {
    return value;
});