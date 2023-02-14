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

function UserRow(props) {

    const usersState = useSelector((state) => state.userData)
    const usersArray = usersState.usersArray
    const selectedUser = usersArray.find((foundUser) => foundUser.id === props.id)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(deleteUser(selectedUser)) 
        dispatch(storeUsersList(null))    
    }

    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.startDate}</td>
            <td>{props.department}</td>
            <td>{props.dateOfBirth}</td>
            <td>{props.street}</td>
            <td>{props.city}</td>
            <td>{props.state}</td>
            <td>{props.zipCode}</td>
            <td>
                <StyledButton onClick={handleClose}><StyledClose src={closeIcon} alt="close"></StyledClose>
                </StyledButton>
            </td>
        </tr>
    )
}

export default UserRow