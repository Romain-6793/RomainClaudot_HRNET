import { useSelector, useDispatch } from "react-redux";
import { deleteUser, storeUsersList } from "../../slices/userSlice";

function UserRow(props) {

    const userState = useSelector((state) => state.user)
    const usersArray = userState.usersArray
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
            <td><button onClick={handleClose}>Delete</button></td>
        </tr>
    )
}

export default UserRow