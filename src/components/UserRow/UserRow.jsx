import { useSelector, useDispatch } from "react-redux";
import { deleteUser, storeUsersList } from "../../slices/userSlice";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import closeIcon from "../../assets/close.svg"

const StyledButton = styled.button`
width: 25px;
height: 25px;
cursor: pointer;
background: ${colors.primary};
border: none;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 20px;
@media (max-width: 768px) {
    width: 15px;
    height: 15px;
}
`

const StyledClose = styled.img`
width: 15px;
height: 15px;
@media (max-width: 768px) {
    width: 10px;
    height: 10px;
}
`

const StyledTd = styled.td`
max-width: 11.11%;
overflow: hidden;
text-overflow: ellipsis;
`

const FocusedTd = styled.td`
font-weight: bold;
max-width: 11.11%;
overflow: hidden;
text-overflow: ellipsis;
`

function UserRow(props) {

    const usersState = useSelector((state) => state.userData)
    const filteredArray = usersState.filteredArray
    const firstNameFocus = usersState.arrowData.firstNameFocus
    const lastNameFocus = usersState.arrowData.lastNameFocus
    const startDateFocus = usersState.arrowData.startDateFocus
    const departmentFocus = usersState.arrowData.departmentFocus
    const dateOfBirthFocus = usersState.arrowData.dateOfBirthFocus
    const streetFocus = usersState.arrowData.streetFocus
    const cityFocus = usersState.arrowData.cityFocus
    const stateFocus = usersState.arrowData.stateFocus
    const zipFocus = usersState.arrowData.zipFocus
    const selectedUser = filteredArray.find((foundUser) => foundUser.id === props.id)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(deleteUser(selectedUser)) 
        dispatch(storeUsersList(null))    
    }

    return (
        <tr>
            {
                firstNameFocus ? 
                <FocusedTd>{props.firstName}</FocusedTd>
                :
                <StyledTd>{props.firstName}</StyledTd>
            }
            {
                lastNameFocus ? 
                <FocusedTd>{props.lastName}</FocusedTd>
                :
                <StyledTd>{props.lastName}</StyledTd>
            }
            {
                startDateFocus ? 
                <FocusedTd>{props.startDate}</FocusedTd>
                :
                <StyledTd>{props.startDate}</StyledTd>
            }
            {
                departmentFocus ? 
                <FocusedTd>{props.department}</FocusedTd>
                :
                <StyledTd>{props.department}</StyledTd>
            }
            {
                dateOfBirthFocus ? 
                <FocusedTd>{props.dateOfBirth}</FocusedTd>
                :
                <StyledTd>{props.dateOfBirth}</StyledTd>
            }
            {
                streetFocus ? 
                <FocusedTd>{props.street}</FocusedTd>
                :
                <StyledTd>{props.street}</StyledTd>
            }
            {
                cityFocus ? 
                <FocusedTd>{props.city}</FocusedTd>
                :
                <StyledTd>{props.city}</StyledTd>
            }
            {
                stateFocus ? 
                <FocusedTd>{props.state}</FocusedTd>
                :
                <StyledTd>{props.state}</StyledTd>
            }
            {
                zipFocus ? 
                <FocusedTd>{props.zipCode}</FocusedTd>
                :
                <StyledTd>{props.zipCode}</StyledTd>
            }
            <td>
                <StyledButton onClick={handleClose}><StyledClose src={closeIcon} alt="close"></StyledClose>
                </StyledButton>
            </td>
        </tr>
    )
}

export default UserRow