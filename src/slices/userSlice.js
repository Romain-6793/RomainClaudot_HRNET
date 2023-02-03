import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: null,
    zipCode: "",
    department: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
})

export default userSlice.reducer