import React, { useState } from "react"
import Pagination from 'react-bootstrap/Pagination'

/*
    Idea :  
        use react-paginate library to implement the full version of paginated values. Only issue with the library
        is we need to extend it to work with bootstrap css.
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={reposCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages-item'}
          activeClassName={'active'}
        />

*/

const SimplePagination = (props) => {
    const {
        pages,
        onClick,
    } = props

    const [activePage, setActivePage] = useState(1)

    React.useEffect(() => {
        onClick(activePage)
      }, [activePage]);
      
      const handlePrev = () => { 
        setActivePage(activePage - 1)
      }
    
      const handleNext = () => {
        setActivePage(activePage + 1)
      }

    return (
        <>
            { 
                pages > 1 && (
                <Pagination className="pagination-end">
                    <Pagination.Prev activeLabel='Previous' disabled={activePage === 1} onClick={handlePrev}/>
                    <Pagination.Next activeLabel='Next' disabled={activePage === pages} onClick={handleNext}/>
                </Pagination>
            )}
        </>
    )
}


export default SimplePagination