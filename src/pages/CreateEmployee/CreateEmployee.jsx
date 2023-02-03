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
    return (
        <PageContainer>
            <FormContainer>
                <StyledTitle>Create employee</StyledTitle>
                <form action="#" id="create-employee">
                    <label for="first-name">First Name</label><br></br>
                    <input type="text" id="first-name" /><br></br>
                    <label for="last-name">Last Name</label><br></br>
                    <input type="text" id="last-name" /><br></br>
                    <label for="date-of-birth">Date of Birth</label><br></br>
                    <input id="date-of-birth" type="text" /><br></br>
                    <label for="start-date">Start Date</label><br></br>
                    <input id="start-date" type="text" /><br></br>
                    <fieldset class="address">
                        <legend>Address</legend>
                        <label for="street">Street</label><br></br>
                        <input id="street" type="text" /><br></br>
                        <label for="city">City</label><br></br>
                        <input id="city" type="text" /><br></br>
                        <label for="state">State</label><br></br>
                        <SelectState id="state"></SelectState><br></br>
                        <label for="zip-code">Zip Code</label><br></br>
                        <input id="zip-code" type="number" /><br></br>
                    </fieldset>
                    <label for="department">Department</label><br></br>
                        <select name="department" id="department">
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