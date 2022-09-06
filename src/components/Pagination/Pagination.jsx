import React from 'react'
import ReactPaginate from 'react-paginate';
import "./Pagination.module.scss"
export default function Pagination({ info, pageNumber, setPageNumber }) {

    /*   let next = () => {
          setPageNumber(x => x + 1)
      };
  
      let prev = () => {
          if (pageNumber === 1) return;
          setPageNumber(x => x - 1)
      }; */

    return (
        <>
            {/* <div className='container d-flex justify-content-center gap-5 my-5'>
            <button onClick={prev} className='btn btn-primary'>Prev</button>
            <button onClick={next} className='btn btn-primary'>Next</button>
            </div> */}
            <ReactPaginate
                nextLabel="Next"
                previousLabel="Prev"
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                nextClassName='btn btn-primary '
                previousClassName='btn btn-primary'
                className='pagination text-white justify-content-center align-items-center gap-3 my-4'
                pageClassName='page-item'
                activeClassName='active'
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1);
                }}
                pageLinkClassName='page-link'
                pageCount={info?.pages} />
        </>


    )
}
