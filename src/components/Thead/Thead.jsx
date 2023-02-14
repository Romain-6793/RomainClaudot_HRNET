import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import arrowUp from "../../assets/arrow-up.svg"
import arrowDown from "../../assets/arrow-down.svg"
import arrowUpGrey from "../../assets/arrow-up-grey.svg"
import arrowDownGrey from "../../assets/arrow-down-grey.svg"
import { toggleFirstNames, toggleLastNames, toggleStartDates, 
toggleDepartments, toggleDatesOfBirth, toggleStreets, toggleCities,
toggleStates, toggleZips, sortFirstNamesAZ, sortFirstNamesZA,
sortLastNamesAZ, sortLastNamesZA, sortStartDatesFormer, sortStartDatesRecent,
sortDepartmentsAZ, sortDepartmentsZA, sortDOBFormer, sortDOBRecent,
sortStreetLow, sortStreetHigh, sortCityAZ, sortCityZA, sortStateAZ,
sortStateZA, sortZipLow, sortZipHigh } from "../../slices/userSlice"


const StyledThead = styled.thead`
margin-bottom: 50px;
font-size: 10px;
@media (max-width: 767px) {
    font-size: 8px;
}
@media (max-width: 424px) {
    font-size: 7px;
}
@media (max-width: 374px) {
    font-size: 6px;
}
`

const StyledRow = styled.tr`
height: 40px;
outline: thin solid;
`

const StyledTh = styled.th`
margin-right: 5px;
padding-left: 10px;
`

const ThDiv = styled.div`
display: flex;
flex-flow: row wrap;
`

const ButtonDiv = styled.div`
margin-left: 3px;
margin-top: 1px;
width: 5px;
height: 10px;
display: flex;
flex-flow: column wrap;
cursor: pointer;
@media (max-width: 767px) {
    display: none;
}
`
const ImgBtnUp = styled.img`
width: 5px;
height: 5px;
`
const ImgBtnDown = styled.img`
width: 5px;
height: 5px;
`

function Thead () {

    const usersState = useSelector((state) => state.userData);
    const arrowData = usersState.arrowData
    const dispatch = useDispatch()

    function handleFirstNames() {
        dispatch(toggleFirstNames())

        if (!arrowData.firstNameUp) {
            dispatch(sortFirstNamesAZ())
        } else {
            dispatch(sortFirstNamesZA())
        }
    }

    function handleLastNames() {
        dispatch(toggleLastNames())

        if (!arrowData.lastNameUp) {
            dispatch(sortLastNamesAZ())
        } else {
            dispatch(sortLastNamesZA())
        }
    }

    function handleStartDates() {
        dispatch(toggleStartDates())

        if (!arrowData.startDateUp) {
            dispatch(sortStartDatesFormer())
        } else {
            dispatch(sortStartDatesRecent())
        }
    }

    function handleDepartments() {
        dispatch(toggleDepartments())

        if (!arrowData.departmentUp) {
            dispatch(sortDepartmentsAZ())
        } else {
            dispatch(sortDepartmentsZA())
        }
    }

    function handleDatesOfBirth() {
        dispatch(toggleDatesOfBirth())

        if (!arrowData.dateOfBirthUp) {
            dispatch(sortDOBFormer())
        } else {
            dispatch(sortDOBRecent())
        }
    }

    function handleStreets() {
        dispatch(toggleStreets())

        if (!arrowData.streetUp) {
            dispatch(sortStreetLow())
        } else {
            dispatch(sortStreetHigh())
        }
    }

    function handleCities() {
        dispatch(toggleCities())

        if (!arrowData.cityUp) {
            dispatch(sortCityAZ())
        } else {
            dispatch(sortCityZA())
        }
    }

    function handleStates() {
        dispatch(toggleStates())

        if (!arrowData.stateUp) {
            dispatch(sortStateAZ())
        } else {
            dispatch(sortStateZA())
        }
    }

    function handleZips() {
        dispatch(toggleZips())

        if (!arrowData.zipUp) {
            dispatch(sortZipLow())
        } else {
            dispatch(sortZipHigh())
        }
    }

    return (
    <StyledThead>
        <StyledRow>
            <StyledTh>
                <ThDiv>
                    First Name
                    {arrowData.firstNameUp && arrowData.firstNameFocus ?
                    <ButtonDiv onClick={handleFirstNames}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.firstNameUp && arrowData.firstNameFocus ?
                    <ButtonDiv onClick={handleFirstNames}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleFirstNames}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Last Name
                    {arrowData.lastNameUp && arrowData.lastNameFocus ?
                    <ButtonDiv onClick={handleLastNames}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.lastNameUp && arrowData.lastNameFocus ?
                    <ButtonDiv onClick={handleLastNames}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleLastNames}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Start Date
                    {arrowData.startDateUp && arrowData.startDateFocus ?
                    <ButtonDiv onClick={handleStartDates}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.startDateUp && arrowData.startDateFocus ?
                    <ButtonDiv onClick={handleStartDates}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleStartDates}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Department
                    {arrowData.departmentUp && arrowData.departmentFocus ?
                    <ButtonDiv onClick={handleDepartments}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.departmentUp && arrowData.departmentFocus ?
                    <ButtonDiv onClick={handleDepartments}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleDepartments}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Date of Birth
                    {arrowData.dateOfBirthUp && arrowData.dateOfBirthFocus ?
                    <ButtonDiv onClick={handleDatesOfBirth}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.dateOfBirthUp && arrowData.dateOfBirthFocus ?
                    <ButtonDiv onClick={handleDatesOfBirth}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleDatesOfBirth}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Street
                    {arrowData.streetUp && arrowData.streetFocus ?
                    <ButtonDiv onClick={handleStreets}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.streetUp && arrowData.streetFocus ?
                    <ButtonDiv onClick={handleStreets}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleStreets}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    City
                    {arrowData.cityUp && arrowData.cityFocus ?
                    <ButtonDiv onClick={handleCities}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.cityUp && arrowData.cityFocus ?
                    <ButtonDiv onClick={handleCities}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleCities}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    State
                    {arrowData.stateUp && arrowData.stateFocus ?
                    <ButtonDiv onClick={handleStates}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.stateUp && arrowData.stateFocus ?
                    <ButtonDiv onClick={handleStates}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleStates}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    ZIP code
                    {arrowData.zipUp && arrowData.zipFocus ?
                    <ButtonDiv onClick={handleZips}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.zipUp && arrowData.zipFocus ?
                    <ButtonDiv onClick={handleZips}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={handleZips}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>Delete
            </StyledTh>
        </StyledRow>
    </StyledThead>  
    )
}

export default Thead