import React, { useEffect, useState } from "react"
import Pagination from 'react-bootstrap/Pagination'
import PropTypes from 'prop-types'

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

      useEffect(() => {
        onClick(activePage)
        // Reference: https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
        // eslint-disable-next-line 
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

SimplePagination.propTypes = {
  pages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}


export default SimplePagination