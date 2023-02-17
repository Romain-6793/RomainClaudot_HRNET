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

function UserRow(props) {

    const usersState = useSelector((state) => state.userData)
    const filteredArray = usersState.filteredArray
    const selectedUser = filteredArray.find((foundUser) => foundUser.id === props.id)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(deleteUser(selectedUser)) 
        dispatch(storeUsersList(null))    
    }

    return (
        <tr>
            <StyledTd>{props.firstName}</StyledTd>
            <StyledTd>{props.lastName}</StyledTd>
            <StyledTd>{props.startDate}</StyledTd>
            <StyledTd>{props.department}</StyledTd>
            <StyledTd>{props.dateOfBirth}</StyledTd>
            <StyledTd>{props.street}</StyledTd>
            <StyledTd>{props.city}</StyledTd>
            <StyledTd>{props.state}</StyledTd>
            <StyledTd>{props.zipCode}</StyledTd>
            <td>
                <StyledButton onClick={handleClose}><StyledClose src={closeIcon} alt="close"></StyledClose>
                </StyledButton>
            </td>
        </tr>
    )
}

export default UserRow