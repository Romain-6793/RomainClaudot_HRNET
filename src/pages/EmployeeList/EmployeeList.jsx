import { useSelector } from "react-redux"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import UserRow from "../../components/UserRow/UserRow"


const PageContainer = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
align-items: center;
border: 1px solid black;
`

const TableHeader = styled.div`
width: 80%;
display: flex;
margin-top: 50px;
justify-content: space-between;
color: ${colors.globaltext};
border: 1px solid purple;
`

const TableContainer = styled.div`
width: 80%;
color: ${colors.globaltext};
border-radius: 10px;
border: 1px solid red;
`

const StyledTable = styled.table`
width: 100%;
border: 1px solid blue;
`

const StyledThead = styled.thead`
border: 1px solid black;
margin-bottom: 50px;
`

const StyledRow = styled.tr`
height: 40px;
border: 1px solid black;
outline: thin solid;
`
const TableFooter = styled.div`
width: 80%;
margin-bottom: 50px;
display: flex;
justify-content: space-between;
color: ${colors.globaltext};
border: 1px solid purple;
`

function EmployeeList () {

    const userState = useSelector((state) => state.user);
    console.log(userState)

    return (
        <PageContainer>
            <TableHeader>
                <div>
                    <span>Show</span>
                    <select name="entries" id="entries">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <span>entries</span>
                </div>
                <div>
                    <span>Search:</span>
                    <input type="search"></input>
                </div>
            </TableHeader>
            <TableContainer>
                <StyledTable>
                    <StyledThead>
                        <StyledRow>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Start Date</th>
                            <th>Department</th>
                            <th>Date of Birth</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>ZIP code</th>
                            <th>Delete</th>
                        </StyledRow>
                    </StyledThead>
                    <tbody>
                    {userState.usersArray.map((index) => (
                        <UserRow 
                        id={index.id}
                        key={index.id}
                        firstName={index.firstName}
                        lastName={index.lastName}
                        dateOfBirth={index.dateOfBirth}
                        startDate={index.startDate}
                        street={index.street}
                        city={index.city}
                        state={index.state}
                        zipCode={index.zipCode}
                        department={index.department}
                        />
                        ))}
                    </tbody>
                </StyledTable>
            </TableContainer>
            <TableFooter>
                <div>
                    <span>Showing x to x of x entries</span>
                    <span>(filtered from x total entries)</span>
                </div>
                <div>
                    <span>Previous</span>
                    <span> X </span>
                    <span>Next</span>
                </div>

            </TableFooter>
        </PageContainer>
    )
}

export default EmployeeList