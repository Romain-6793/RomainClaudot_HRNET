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
                    filteredArray: [...state.usersArray, action.payload],
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
        sortFirstNamesAZ(state, action) {

            const usersArray = [...state.usersArray];

            const cloneUsersArray = usersArray.sort((a, b) => (a.firstName > b.firstName) ?
                1
                :
                (a.firstName < b.firstName) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortFirstNamesZA(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.firstName > b.firstName) ?
                -1
                :
                (a.firstName < b.firstName) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortLastNamesAZ(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.lastName > b.lastName) ?
                1
                :
                (a.lastName < b.lastName) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortLastNamesZA(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.lastName > b.lastName) ?
                -1
                :
                (a.lastName < b.lastName) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortStartDatesFormer(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.startDate > b.startDate) ?
                1
                :
                (a.startDate < b.startDate) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortStartDatesRecent(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.startDate > b.startDate) ?
                -1
                :
                (a.startDate < b.startDate) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortDepartmentsAZ(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.department > b.department) ?
                1
                :
                (a.department < b.department) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortDepartmentsZA(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.department > b.department) ?
                -1
                :
                (a.department < b.department) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortDOBFormer(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.dateOfBirth > b.dateOfBirth) ?
                1
                :
                (a.dateOfBirth < b.dateOfBirth) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortDOBRecent(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.dateOfBirth > b.dateOfBirth) ?
                -1
                :
                (a.dateOfBirth < b.dateOfBirth) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortStreetLow(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.street > b.street) ?
                1
                :
                (a.street < b.street) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortStreetHigh(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.street > b.street) ?
                -1
                :
                (a.street < b.street) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortCityAZ(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.city > b.city) ?
                1
                :
                (a.city < b.city) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortCityZA(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.city > b.city) ?
                -1
                :
                (a.city < b.city) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortStateAZ(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.state > b.state) ?
                1
                :
                (a.state < b.state) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortStateZA(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.state > b.state) ?
                -1
                :
                (a.state < b.state) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortZipLow(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.zipCode > b.zipCode) ?
                1
                :
                (a.zipCode < b.zipCode) ?
                    -1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
            }
        },
        sortZipHigh(state, action) {

            const initialArray = [...state.usersArray];

            const cloneUsersArray = initialArray.sort((a, b) => (a.zipCode > b.zipCode) ?
                -1
                :
                (a.zipCode < b.zipCode) ?
                    1
                    :
                    0
            )

            return {
                ...state,
                usersArray: cloneUsersArray,
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
                    usersArray: cloneUsersArray,
                }
            } else {
                return {
                    ...state,
                    usersArray: JSON.parse(resetArray).sort((a, b) => (a.firstName > b.firstName) ?
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

export const { pushUser, deleteUser, storeUsersList, unstoreUsersList, loadData,
    setRowsPerPage, toggleFirstNames, toggleLastNames, toggleStartDates, toggleDepartments,
    toggleDatesOfBirth, toggleStreets, toggleCities, toggleStates, toggleZips,
    sortFirstNamesAZ, sortFirstNamesZA, sortLastNamesAZ, sortLastNamesZA, sortStartDatesFormer,
    sortStartDatesRecent, sortDepartmentsAZ, sortDepartmentsZA, sortDOBFormer, sortDOBRecent,
    sortStreetLow, sortStreetHigh, sortCityAZ, sortCityZA, sortStateAZ, sortStateZA,
    sortZipLow, sortZipHigh, filteredSearch } = userSlice.actions;

export default userSlice.reducer