import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rowsPerPage: 10,
    usersArray: [],
    filteredArray: [],
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
        updateFilteredArray(state, action) {
            return {
                ...state,
                filteredArray: [...state.usersArray],
            }
        },
        deleteUser(state, action) {

            const initialArray = [...state.usersArray];
            const userToDelete = action.payload

            const cloneUsersArray = initialArray.filter(el => el.id !== userToDelete.id)

            return {
                ...state,
                usersArray: cloneUsersArray,
                filteredArray: cloneUsersArray,
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
                    usersArray: JSON.parse(data),
                    filteredArray: JSON.parse(data).sort((a, b) => (a.firstName > b.firstName) ?
                        1
                        :
                        (a.firstName < b.firstName) ?
                            -1
                            :
                            0
                    )
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
                        ...initialState.arrowData,
                        firstNameUp: false,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                    },
                }
            }
        },
        toggleLastNames(state, action) {
            if (state.arrowData.lastNameUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        lastNameFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        lastNameUp: true,
                        lastNameFocus: true,
                    },
                }
            }
        },
        toggleStartDates(state, action) {
            if (state.arrowData.startDateUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        startDateFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        startDateUp: true,
                        startDateFocus: true,
                    },
                }
            }
        },
        toggleDepartments(state, action) {
            if (state.arrowData.departmentUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        departmentFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        departmentUp: true,
                        departmentFocus: true,
                    },
                }
            }
        },
        toggleDatesOfBirth(state, action) {
            if (state.arrowData.dateOfBirthUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        dateOfBirthFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        dateOfBirthUp: true,
                        dateOfBirthFocus: true,
                    },
                }
            }
        },
        toggleStreets(state, action) {
            if (state.arrowData.streetUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        streetFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        streetUp: true,
                        streetFocus: true,
                    },
                }
            }
        },
        toggleCities(state, action) {
            if (state.arrowData.cityUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        cityFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        cityUp: true,
                        cityFocus: true,
                    },
                }
            }
        },
        toggleStates(state, action) {
            if (state.arrowData.stateUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        stateFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        stateUp: true,
                        stateFocus: true,
                    },
                }
            }
        },
        toggleZips(state, action) {
            if (state.arrowData.zipUp) {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        zipFocus: true,
                    },
                }
            } else {
                return {
                    ...state,
                    arrowData: {
                        ...initialState.arrowData,
                        firstNameUp: false,
                        firstNameFocus: false,
                        zipUp: true,
                        zipFocus: true,
                    },
                }
            }
        },
        sortData(state, action) {
            const stringSort = (values, key) => values.sort((a, b) => (a[key] > b[key]) ?
                1
                :
                (a[key] < b[key]) ?
                    -1
                    :
                    0
            )

            const getSort = (key, direction) => {

                const filteredArray = [...state.filteredArray]

                const res = stringSort(filteredArray, action.payload.key);
                // That last line of return gives me a Boolean which will be my direction, If true for example
                // I get my sorted array, if false, I get the reverse.
                return Boolean(direction) ? res : res.reverse();
            }

            return {
                ...state,
                filteredArray: getSort(action.payload.key, action.payload.direction)
            }
        },
        filteredSearch(state, action) {

            const initialArray = [...state.usersArray];
            const resetArray = localStorage.getItem("usersArray")

            const cloneUsersArray = initialArray.filter((obj) => {

                return obj.firstName.toLowerCase().includes(action.payload.toLowerCase())
                    || obj.lastName.toLowerCase().includes(action.payload.toLowerCase())
                    || obj.startDate.includes(action.payload)
                    || obj.department.toLowerCase().includes(action.payload.toLowerCase())
                    || obj.dateOfBirth.includes(action.payload)
                    || obj.street.toLowerCase().includes(action.payload.toLowerCase())
                    || obj.city.toLowerCase().includes(action.payload.toLowerCase())
                    || obj.state.toLowerCase().includes(action.payload.toLowerCase())
                    || obj.zipCode.includes(action.payload)
            })

            if (action.payload) {
                return {
                    ...state,
                    filteredArray: cloneUsersArray,
                }
            } else {
                return {
                    ...state,
                    filteredArray: JSON.parse(resetArray).sort((a, b) => (a.firstName > b.firstName) ?
                        1
                        :
                        (a.firstName < b.firstName) ?
                            -1
                            :
                            0
                    ),

                }
            }
        },
    },
})

export const { pushUser, updateFilteredArray, deleteUser, storeUsersList, unstoreUsersList, loadData,
    setRowsPerPage, toggleFirstNames, toggleLastNames, toggleStartDates, toggleDepartments,
    toggleDatesOfBirth, toggleStreets, toggleCities, toggleStates, toggleZips,
    filteredSearch, sortData } = userSlice.actions;

export default userSlice.reducer