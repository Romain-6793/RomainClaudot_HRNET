import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../slices/userSlice";

function UserRow(props) {

    const userState = useSelector((state) => state.user)
    const usersArray = userState.usersArray
    const selectedUser = usersArray.find((foundUser) => foundUser.id === props.id)
    const dispatch = useDispatch()

    const handleClose = () => {
        // if (index > -1) { // only splice array when item is found
        //     usersArray.splice(index, 1); // 2nd parameter means remove one item only
        //   }
            // usersArray.splice(selectedUser, 1); // 2nd parameter means remove one item only
        dispatch(deleteUser(selectedUser))     
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