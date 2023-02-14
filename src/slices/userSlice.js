import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rowsPerPage: 10,
    usersArray: [],
    arrowData: {
        firstNameFocus: true,
        lastNameFocus: false,
        startDateFocus: false,
        departmentFocus: false,
        dateOfBirthFocus: false,
        streetFocus: false,
        cityFocus: false,
        stateFocus: false,
        zipFocus: false,
        firstNameUp: true,
        lastNameUp: false,
        startDateUp: false,
        departmentUp: false,
        dateOfBirthUp: false,
        streetUp: false,
        cityUp: false,
        stateUp: false,
        zipUp: false,
    }
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
        toggleFirstNames(state, action) {
            if (state.arrowData.firstNameUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        firstNameUp: false,
                        firstNameFocus: true,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        firstNameUp: true,
                        firstNameFocus: true,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleLastNames(state, action) {
            if (state.arrowData.lastNameUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        lastNameUp: false,
                        firstNameFocus: false,
                        lastNameFocus: true,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        lastNameUp: true,
                        firstNameFocus: false,
                        lastNameFocus: true,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleStartDates(state, action) {
            if (state.arrowData.startDateUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        startDateUp: false,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: true,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        startDateUp: true,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: true,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleDepartments(state, action) {
            if (state.arrowData.departmentUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        departmentUp: false,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: true,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        departmentUp: true,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: true,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleDatesOfBirth(state, action) {
            if (state.arrowData.dateOfBirthUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        dateOfBirthUp: false,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: true,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        dateOfBirthUp: true,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: true,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleStreets(state, action) {
            if (state.arrowData.streetUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        streetUp: false,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: true,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        streetUp: true,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: true,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleCities(state, action) {
            if (state.arrowData.cityUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        cityUp: false,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: true,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        cityUp: true,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: true,
                        stateFocus: false,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleStates(state, action) {
            if (state.arrowData.stateUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        stateUp: false,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: true,
                        zipFocus: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        stateUp: true,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: true,
                        zipFocus: false,
                    },
                }
            }
        },
        toggleZips(state, action) {
            if (state.arrowData.zipUp) {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        zipUp: false,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...state.arrowData,
                        zipUp: true,
                        firstNameFocus: false,
                        lastNameFocus: false,
                        startDateFocus: false,
                        departmentFocus: false,
                        dateOfBirthFocus: false,
                        streetFocus: false,
                        cityFocus: false,
                        stateFocus: false,
                        zipFocus: true,
                    },
                }
            }
        },
    },
})

export const { pushUser, deleteUser, storeUsersList, unstoreUsersList, loadData,
    setRowsPerPage, toggleFirstNames, toggleLastNames, toggleStartDates, toggleDepartments,
    toggleDatesOfBirth, toggleStreets, toggleCities, toggleStates, toggleZips } = userSlice.actions;

export default userSlice.reducer