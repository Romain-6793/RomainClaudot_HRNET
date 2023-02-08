import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import ReactPaginate from "react-paginate"
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
    const totalArray = userState.usersArray
    console.log(totalArray)

    // We start with an empty list of items.
    const [currentRows, setCurrentRows] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [rowOffset, setRowOffset] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = rowOffset + rowsPerPage;
        console.log(`Loading items from ${rowOffset} to ${endOffset}`);
        setCurrentRows(totalArray.slice(rowOffset, endOffset));
        setPageCount(Math.ceil(totalArray.length / rowsPerPage));
    }, [rowOffset, rowsPerPage, totalArray]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * rowsPerPage % totalArray.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setRowOffset(newOffset);
    };

    return (
        <PageContainer>
            <TableHeader>
                <div>
                    <span>Show</span>
                    <select 
                    name="entries" 
                    id="entries" 
                    onChange={(e) => setRowsPerPage(Number(e.target.value))}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
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
                    {currentRows && currentRows.map((index) => (
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
                {/* <div>
                    <span>Previous</span>
                    <span> X </span>
                    <span>Next</span>
                </div> */}
                <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />

            </TableFooter>
        </PageContainer>
    )
}

export default EmployeeList