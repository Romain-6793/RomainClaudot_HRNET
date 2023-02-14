import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import arrowUp from "../../assets/arrow-up.svg"
import arrowDown from "../../assets/arrow-down.svg"
import arrowUpGrey from "../../assets/arrow-up-grey.svg"
import arrowDownGrey from "../../assets/arrow-down-grey.svg"
import { toggleFirstNames, toggleLastNames, toggleStartDates, 
    toggleDepartments, toggleDatesOfBirth, toggleStreets, toggleCities,
toggleStates, toggleZips } from "../../slices/userSlice"


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

// const StyledButton = styled.button`
// width: 5px;
// height: 10px;
// cursor: pointer;
// border: none;
// background: transparent;
// `

const ButtonDiv = styled.div`
margin-left: 3px;
margin-top: 1px;
width: 5px;
height: 10px;
display: flex;
flex-flow: column wrap;
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
  
    return (
    <StyledThead>
        <StyledRow>
            <StyledTh>
                <ThDiv>
                    First Name
                    {arrowData.firstNameUp && arrowData.firstNameFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleFirstNames())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.firstNameUp && arrowData.firstNameFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleFirstNames())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleFirstNames())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Last Name
                    {arrowData.lastNameUp && arrowData.lastNameFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleLastNames())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.lastNameUp && arrowData.lastNameFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleLastNames())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleLastNames())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Start Date
                    {arrowData.startDateUp && arrowData.startDateFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleStartDates())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.startDateUp && arrowData.startDateFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleStartDates())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleStartDates())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Department
                    {arrowData.departmentUp && arrowData.departmentFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleDepartments())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.departmentUp && arrowData.departmentFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleDepartments())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleDepartments())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Date of Birth
                    {arrowData.dateOfBirthUp && arrowData.dateOfBirthFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleDatesOfBirth())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.dateOfBirthUp && arrowData.dateOfBirthFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleDatesOfBirth())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleDatesOfBirth())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    Street
                    {arrowData.streetUp && arrowData.streetFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleStreets())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.streetUp && arrowData.streetFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleStreets())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleStreets())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    City
                    {arrowData.cityUp && arrowData.cityFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleCities())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.cityUp && arrowData.cityFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleCities())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleCities())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    State
                    {arrowData.stateUp && arrowData.stateFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleStates())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.stateUp && arrowData.stateFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleStates())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleStates())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>}
                </ThDiv>
            </StyledTh>
            <StyledTh>
                <ThDiv>
                    ZIP code
                    {arrowData.zipUp && arrowData.zipFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleZips())}>
                    <ImgBtnUp src={arrowUp} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDownGrey} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    : !arrowData.zipUp && arrowData.zipFocus ?
                    <ButtonDiv onClick={() => dispatch(toggleZips())}>
                    <ImgBtnUp src={arrowUpGrey} alt="up button"></ImgBtnUp>
                    <ImgBtnDown src={arrowDown} alt="down button"></ImgBtnDown>
                    </ButtonDiv>
                    :
                    <ButtonDiv onClick={() => dispatch(toggleZips())}>
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