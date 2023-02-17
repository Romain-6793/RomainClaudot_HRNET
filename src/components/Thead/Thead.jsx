import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import arrowUp from "../../assets/arrow-up.svg"
import arrowDown from "../../assets/arrow-down.svg"
import arrowUpGrey from "../../assets/arrow-up-grey.svg"
import arrowDownGrey from "../../assets/arrow-down-grey.svg"
import { toggleFirstNames, toggleLastNames, toggleStartDates, 
toggleDepartments, toggleDatesOfBirth, toggleStreets, toggleCities,
toggleStates, toggleZips, sortData } from "../../slices/userSlice"


const StyledThead = styled.thead`
margin-bottom: 50px;
font-size: 10px;
@media (max-width: 767px) {
    font-size: 7px;
}
@media (max-width: 424px) {
    font-size: 5px;
}
@media (max-width: 374px) {
    font-size: 4px;
}
`

const StyledRow = styled.tr`
height: 40px;
outline: thin solid;
`

const StyledTh = styled.th`
margin-right: 5px;
`

const ThDiv = styled.div`
display: flex;
flex-flow: row wrap;
margin-left: 10%;
@media (max-width: 1023px) {
    margin-left: 5%;
}
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
            dispatch(sortData({key:'firstName', direction : true}))
        } else {
            dispatch(sortData({key:'firstName', direction : false}))
        }
    }

    function handleLastNames() {
        dispatch(toggleLastNames())

        if (!arrowData.lastNameUp) {
            dispatch(sortData({key:'lastName', direction : true}))
        } else {
            dispatch(sortData({key:'lastName', direction : false}))
        }
    }

    function handleStartDates() {
        dispatch(toggleStartDates())

        if (!arrowData.startDateUp) {
            dispatch(sortData({key:'startDate', direction : true}))
        } else {
            dispatch(sortData({key:'startDate', direction : false}))
        }
    }

    function handleDepartments() {
        dispatch(toggleDepartments())

        if (!arrowData.departmentUp) {
            dispatch(sortData({key:'department', direction : true}))
        } else {
            dispatch(sortData({key:'department', direction : false}))
        }
    }

    function handleDatesOfBirth() {
        dispatch(toggleDatesOfBirth())

        if (!arrowData.dateOfBirthUp) {
            dispatch(sortData({key:'dateOfBirth', direction : true}))
        } else {
            dispatch(sortData({key:'dateOfBirth', direction : false}))
        }
    }

    function handleStreets() {
        dispatch(toggleStreets())

        if (!arrowData.streetUp) {
            dispatch(sortData({key:'street', direction : true}))
        } else {
            dispatch(sortData({key:'street', direction : false}))
        }
    }

    function handleCities() {
        dispatch(toggleCities())

        if (!arrowData.cityUp) {
            dispatch(sortData({key:'city', direction : true}))
        } else {
            dispatch(sortData({key:'city', direction : false}))
        }
    }

    function handleStates() {
        dispatch(toggleStates())

        if (!arrowData.stateUp) {
            dispatch(sortData({key:'state', direction : true}))
        } else {
            dispatch(sortData({key:'state', direction : false}))
        }
    }

    function handleZips() {
        dispatch(toggleZips())

        if (!arrowData.zipUp) {
            dispatch(sortData({key:'zipCode', direction : true}))
        } else {
            dispatch(sortData({key:'zipCode', direction : false}))
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