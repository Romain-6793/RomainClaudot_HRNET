import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setRowsPerPage } from "../../slices/userSlice"
import ReactPaginate from "react-paginate"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import UserRow from "../../components/UserRow/UserRow"
import "../../utils/style/paginate.css"
import useWindowSize from "../../utils/hooks/useWindowSize"
import Thead from "../../components/Thead/Thead"

const PageContainer = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
align-items: center;
`

const PageMain = styled.div`
width: 90%;
border: 1px solid black;
margin-top: 50px;
margin-bottom: 50px;
`

const TableHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
color: ${colors.globaltext};
font-size: 12px;
@media (max-width: 767px) {
    font-size: 10px;
}
`

const StyledTable = styled.table`
width: 100%;
color: ${colors.globaltext};
`

const StyledTbody = styled.tbody`
font-size: 10px;
@media (max-width: 767px) {
    font-size: 8px;
}
@media (max-width: 424px) {
    font-size: 6px;
}
`

const TableFooter = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
color: ${colors.globaltext};
font-size: 10px;
@media (max-width: 767px) {
    font-size: 8px;
}
@media (max-width: 423px) {
    font-size: 7px;
}
@media (max-width: 374px) {
    font-size: 6px;
}
`

const TableLegend = styled.div`
margin-top: 10px;
max-width: 50%;
`

function EmployeeList () {

    const usersState = useSelector((state) => state.userData);
    const dispatch = useDispatch()
    const totalArray = usersState.usersArray
    

    // We start with an empty list of items.
    const [currentRows, setCurrentRows] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [rowOffset, setRowOffset] = useState(0);

    // rowOffset represents the first index to be displayed within the page

    const rowsPerPage = usersState.rowsPerPage

    // const size = useWindowSize()
    // const [isSmall, setIsSmall] = useState({ matches: size.width("(max-width: 767px)").matches });
    const [isFirstPage, setIsFirstPage] = useState(true)
    const [isLastPage, setIsLastPage] = useState(false)
    const [isLargerThanTotal, setIsLargerThanTotal] = useState(false)

    const endOffset = rowOffset + rowsPerPage

    // function screenListener() {
    //     const handler = e => setIsSmall({ matches: e.matches });
    //     window.matchMedia("(max-width: 767px)").addEventListener('change', handler);
    // }

    // screenListener()


    useEffect(() => {
        // Fetch items from another resources.

        // endOffset represents the last index to be displayed within the page

        setCurrentRows(totalArray.slice(rowOffset, endOffset));

        // We slice the totalArray from the first index to the last dynamic index 

        setPageCount(Math.ceil(totalArray.length / rowsPerPage));


        // We set the Page count to the superior int of the number of elements of the array / rowsPerPage

        if (endOffset > totalArray.length) {
            setIsLargerThanTotal(true)
        } else {
            setIsLargerThanTotal(false)
        }

    }, [rowOffset, rowsPerPage, totalArray, endOffset]);

    // Invoke when user click to request another page.

    // Each time a page is clicked the number page x will be multiplied by rowsPerPage we will
    // divide it by the length of the Array. The rest/remainder of the operation will be our new
    // first dynamic index.
    const handlePageClick = (e) => {

        if (e.selected === pageCount -1) {
            setIsLastPage(true)
        } else {
            setIsLastPage(false)
        }

        if (e.selected === 0) {
            setIsFirstPage(true)
        } else {
            setIsFirstPage(false)
        }

        const newOffset = e.selected * rowsPerPage % totalArray.length;

        setRowOffset(newOffset);
    };
    const handleRowsChange = (e) => {

        dispatch(setRowsPerPage(Number(e.target.value)))
        
    };
    return (
        <PageContainer>
            <PageMain>
                <TableHeader>
                    <div>
                        <span>Show </span>
                        <select 
                        name="entries" 
                        id="entries" 
                        onChange={handleRowsChange}
                        defaultValue={
                            rowsPerPage === 10 ? "10" : 
                            rowsPerPage === 25 ? "25" :
                            rowsPerPage === 50 ? "50" :
                            rowsPerPage === 100 ? "100" :
                            null
                        }>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option> 
                        </select>
                        <span> entries</span>
                    </div>
                    <div>
                        <span>Search:</span>
                        <input type="search"></input>
                    </div>
                </TableHeader>
                <StyledTable>
                    <Thead></Thead>
                    <StyledTbody>
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
                    </StyledTbody>
                </StyledTable>
                <TableFooter>
                    <TableLegend>
                        {isLastPage || isLargerThanTotal ?
                        <span>Showing {rowOffset + 1} to {totalArray.length} of {totalArray.length} entries</span>
                        :
                        <span>Showing {rowOffset + 1} to {endOffset} of {totalArray.length} entries</span>
                        }
                        <span>(filtered from x entries)</span>
                    </TableLegend>
                    <ReactPaginate
                    // nextLabel={isSmall.matches ? ">>" : "Next"}
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    // previousLabel={isSmall.matches ? "<<" : "Previous"}
                    previousLabel="Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-prev-item"
                    previousLinkClassName={isFirstPage ? "grey-prev-link" : "page-prev-link"}
                    nextClassName="page-next-item"
                    nextLinkClassName={isLastPage ? "grey-next-link" : "page-next-link"}
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    />
                </TableFooter>
            </PageMain>
        </PageContainer>
    )
}

export default EmployeeList