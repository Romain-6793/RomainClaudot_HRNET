import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     startDate: "",
//     street: "",
//     city: "",
//     state: null,
//     zipCode: "",
//     department: null,
// }

const initialState = {
    usersArray: [],
}

const userSlice = createSlice({
    name: "user",
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
        // unstoreUsersList(state, action) {

        //     localStorage.removeItem("usersArray")

        // },
        loadData(state, action) {
            const data = localStorage.getItem("usersArray")

            if (data) {
                return {
                    ...state,
                    usersArray: JSON.parse(data)
                };
            } else return { ...state };
        },
    },
})

export const { pushUser, deleteUser, storeUsersList, unstoreUsersList, loadData } = userSlice.actions;

export default userSlice.reducer