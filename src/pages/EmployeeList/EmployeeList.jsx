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
    const totalArray = userState.usersArray

    // We start with an empty list of items.
    const [currentRows, setCurrentRows] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [rowOffset, setRowOffset] = useState(0);

    // rowOffset represents the first index to be displayed within the page

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isLastPage, setIsLastPage] = useState(false);

    const endOffset = rowOffset + rowsPerPage;

    useEffect(() => {
        // Fetch items from another resources.

        // endOffset represents the last index to be displayed within the page

        setCurrentRows(totalArray.slice(rowOffset, endOffset));

        // We slice the totalArray from the first index to the last dynamic index 

        setPageCount(Math.ceil(totalArray.length / rowsPerPage));


        // We set the Page count to the superior int of the number of elements of the array / rowsPerPage

    }, [rowOffset, rowsPerPage, totalArray, endOffset]);

    // Invoke when user click to request another page.

    // Each time a page is clicked the number page x will be multiplied by rowsPerPage we will
    // divide it by the length of the Array. The rest/remainder of the operation will be our new
    // first dynamic index.
    const handlePageClick = (event) => {

        if (event.selected === pageCount -1) {
            setIsLastPage(true)
        } else {
            setIsLastPage(false)
        }

        const newOffset = event.selected * rowsPerPage % totalArray.length;

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
                    {isLastPage?
                    <span>Showing {rowOffset + 1} to {totalArray.length} of {totalArray.length} entries</span>
                    :
                    <span>Showing {rowOffset + 1} to {endOffset} of {totalArray.length} entries</span>
                    }
                    <span>(filtered from x entries)</span>
                </div>
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