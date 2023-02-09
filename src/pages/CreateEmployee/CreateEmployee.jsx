import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import SelectState from "../../components/SelectState/SelectState"
import {pushUser, storeUsersList} from "../../slices/userSlice"
import closeIcon from "../../assets/close.svg"

const SuperContainer = styled.div`
width: 100%;
height: 740px;
position: relative;
`


const PageContainer = styled.div`
width: 100%;
display: flex;
height: 740px;
flex-flow: column wrap;
align-items: center;
position: absolute;
`

const FormContainer = styled.div`
width: 300px;
margin-top: 50px;
margin-bottom: 50px;
display: flex;
flex-flow: column wrap;
align-items: center;
color: ${colors.globaltext};
background: ${colors.secondary};
border-radius: 10px;
`

const StyledTitle = styled.h2`
color: ${colors.globaltext};
font-weight: bold;
font-size: 36px;
`

const StyledButton= styled.button`
width: 75px;
height: 50px;
margin-top: 20px;
margin-bottom: 20px;
color: #fff;
background: ${colors.primary};
font-weight: bold;
cursor: pointer;
`

const Popup= styled.div`
width: 400px;
height: 100px;
position: absolute;
background: #fff;
border-radius: 10px;
top: 40%;
left: 39%;
z-index: 3;
opacity: 1;
`

const PopupArea= styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`
const CloseButton= styled.button`
width: 30px;
height: 30px;
border-radius: 50px;
background: ${colors.primary};
position: absolute;
opacity: 1;
right: -5px;
top: -5px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

function CreateEmployee () {

    const dispatch = useDispatch()

    const [isCreated, setIsCreated] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        // The following process with formUser/newUser prevents me to rerender too much my components 
        // with a useState on my user and a change event on every input.

        // With Objects.values(e.target), I retrieve all the values of the inputs bound to my form, 
        // though I don't need the button value, the FiberNode value, nor the object/action value 
        // (3 last indexes), so I get rid of them.
        // As well, I get rid of index 4 (fieldset). That's why I use filter.
        // What I obtain after my filter is an array that I need to transform into an object.
        // That's why I then use reduce, that will do the next thing :
        // for each iteration, and with the spread operator that is necessary to return an object,
        // I assign the property to the id of my index (id of each input), then I assign the value, to
        // the value of my index.
        // the empty object is the initialValue, recommended when you use reduce.

        const formUser = Object.values(e.target).filter((_, index) => index < 10 && index !== 4)
        .reduce((acc, cur) => ({...acc, [cur.id] : cur.value}), {})

        // With formUser, my object isn't complete yet, so I create my final object, newUser in 
        // which I add an id property which is very randomized to be as unique as possible.
        // This will be the object pushed in my usersArray for each submitting of my form.

        const newUser = {
            id :  Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
            ...formUser,
        }
        dispatch(pushUser(newUser))
        dispatch(storeUsersList())
        setIsCreated(true)
        resetform()
    }

    const resetform = () => {
        document.getElementById("create-employee").reset()
    }

    const handleClose = () => {
        setIsCreated(false)
    }

    return (
        <SuperContainer>
            <PageContainer style={isCreated? {background: "black", opacity:0.6} : {background: "#fff"}} >
                {isCreated? 
                <Popup>
                    <PopupArea>
                        <CloseButton onClick={handleClose}><img src={closeIcon} alt="closepopup"></img></CloseButton>
                        <span>Employee Created !</span>
                    </PopupArea>
                </Popup> 
                : null}
                <FormContainer style={isCreated? {opacity:0.6} : {opacity: 1}}>
                    <StyledTitle>Create employee</StyledTitle>
                    <form action="#" id="create-employee" onSubmit={handleSubmit} style={{zIndex: 1}}>
                        <label htmlFor="firstName">First Name</label><br></br>
                        <input type="text" id="firstName"/>
                        <br></br>
                        <label htmlFor="lastName">Last Name</label><br></br>
                        <input type="text" id="lastName"/>
                        <br></br>
                        <label htmlFor="dateOfBirth">Date of Birth</label><br></br>
                        <input id="dateOfBirth" type="date"/>
                        <br></br>
                        <label htmlFor="startDate">Start Date</label><br></br>
                        <input id="startDate" type="date"/>
                        <br></br>
                        <fieldset className="address">
                            <legend>Address</legend>
                            <label htmlFor="street">Street</label><br></br>
                            <input id="street" type="text"/>
                            <br></br>
                            <label htmlFor="city">City</label><br></br>
                            <input id="city" type="text"/>
                            <br></br>
                            <label htmlFor="state">State</label><br></br>
                            <SelectState>
                            </SelectState><br></br>
                            <label htmlFor="zipCode">Zip Code</label><br></br>
                            <input id="zipCode" type="number"/>
                            <br></br>
                        </fieldset>
                        <label htmlFor="department">Department</label><br></br>
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select><br></br>
                        <StyledButton type="submit">Save</StyledButton>
                    </form>
                </FormContainer>
            </PageContainer>
        </SuperContainer>
    )
}

export default CreateEmployee