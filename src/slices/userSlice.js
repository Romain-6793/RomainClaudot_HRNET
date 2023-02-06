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
    name: "inital state",
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
                    usersArray: [...state.usersArray, action.payload]
                }
            }
        },
        deleteUser(state, action) {

            const initialArray = [...state.usersArray];
            const userToDelete = action.payload
            // cloneUsersArray.splice(action.payload, 1);
            // console.log(cloneUsersArray)


            const cloneUsersArray = initialArray.filter(el => el.id !== userToDelete.id)
            console.log(cloneUsersArray)

            return {
                ...state,
                usersArray: cloneUsersArray,
            }

        },
    },
})

export const { pushUser, deleteUser } = userSlice.actions;

export default userSlice.reducer