import {useState} from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import SelectState from "../../components/SelectState/SelectState"

const PageContainer = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
align-items: center;
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

function CreateEmployee () {

    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        dateOfBirth : "",
        startDate: "",
        street : "",
        city : "",
        state : null,
        zipCode : "",
        department : null,
    })

    console.log(user)
    

    return (
        <PageContainer>
            <FormContainer>
                <StyledTitle>Create employee</StyledTitle>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label><br></br>
                    <input type="text" id="first-name" onChange={(e) => setUser({...user, firstName:e.target.value})}/>
                    <br></br>
                    <label htmlFor="last-name">Last Name</label><br></br>
                    <input type="text" id="last-name" onChange={(e) => setUser({...user, lastName:e.target.value})}/>
                    <br></br>
                    <label htmlFor="date-of-birth">Date of Birth</label><br></br>
                    <input id="date-of-birth" type="date" onChange={(e) => setUser({...user, dateOfBirth:e.target.value})}/>
                    <br></br>
                    <label htmlFor="start-date">Start Date</label><br></br>
                    <input id="start-date" type="date" onChange={(e) => setUser({...user, startDate:e.target.value})}/>
                    <br></br>
                    <fieldset className="address">
                        <legend>Address</legend>
                        <label htmlFor="street">Street</label><br></br>
                        <input id="street" type="text" onChange={(e) => setUser({...user, street:e.target.value})}/>
                        <br></br>
                        <label htmlFor="city">City</label><br></br>
                        <input id="city" type="text" onChange={(e) => setUser({...user, city:e.target.value})}/>
                        <br></br>
                        <label htmlFor="state">State</label><br></br>
                        <SelectState id="state" onChange={(e) => setUser({...user, state:e.target.value})}>
                        </SelectState><br></br>
                        <label htmlFor="zip-code">Zip Code</label><br></br>
                        <input id="zip-code" type="number" onChange={(e) => setUser({...user, zipCode:e.target.value})}/>
                        <br></br>
                    </fieldset>
                    <label htmlFor="department">Department</label><br></br>
                        <select name="department" id="department" onChange={(e) => setUser({...user, department:e.target.value})}>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                </form>
                <StyledButton type="submit">Save</StyledButton>
            </FormContainer> 
        </PageContainer>
    )
}

export default CreateEmployee