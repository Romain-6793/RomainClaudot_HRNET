import styled from "styled-components"
import colors from "../../utils/style/colors"


const PageContainer = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
align-items: center;
border: 1px solid black;
`
const TableContainer = styled.div`
width: 80%;
margin-top: 50px;
margin-bottom: 50px;
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


function EmployeeList () {
    return (
        <PageContainer>
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
                        <StyledRow>
                            <td>Some FN</td>
                            <td>Some LN</td>
                            <td>Some SD</td>
                            <td>Some D</td>
                            <td>Some DOB</td>
                            <td>Some S</td>
                            <td>Some C</td>
                            <td>Some S</td>
                            <td>Some ZC</td>
                            <td>Delete</td>
                        </StyledRow>
                        <StyledRow>
                            <td>Some FN</td>
                            <td>Some LN</td>
                            <td>Some SD</td>
                            <td>Some D</td>
                            <td>Some DOB</td>
                            <td>Some S</td>
                            <td>Some C</td>
                            <td>Some S</td>
                            <td>Some ZC</td>
                            <td>Delete</td>
                        </StyledRow>
                    </tbody>
                </StyledTable>
            </TableContainer>
        </PageContainer>
    )
}

export default EmployeeList