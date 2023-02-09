import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rowsPerPage: 10,
    usersArray: [],
}

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        pushUser(state, action) {
            if (action.payload) {
                return {
                    ...state,
                    usersArray: [...state.usersArray, action.payload],
                }
            } else {
                return {
                    ...state
                }
            }
        },
        deleteUser(state, action) {

            const initialArray = [...state.usersArray];
            const userToDelete = action.payload

            const cloneUsersArray = initialArray.filter(el => el.id !== userToDelete.id)

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        storeUsersList(state, action) {

            const usersArray = [...state.usersArray];
            localStorage.setItem("usersArray", JSON.stringify(usersArray))
        },
        loadData(state, action) {
            const data = localStorage.getItem("usersArray")
            if (data) {
                return {
                    ...state,
                    usersArray: JSON.parse(data)
                };
            } else return { ...state };
        },
        setRowsPerPage(state, action) {

            return {
                ...state,
                rowsPerPage: action.payload,
            }
        },
    },
})

export const { pushUser, deleteUser, storeUsersList, unstoreUsersList, loadData, setRowsPerPage } = userSlice.actions;

export default userSlice.reducer