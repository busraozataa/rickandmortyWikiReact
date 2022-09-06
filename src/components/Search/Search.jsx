import React from 'react'
import styles from "./Search.module.scss"

export default function Search({ setSearch, setPageNumber }) {
    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>
            <input type="text" className='' placeholder='Search for Characters' onChange={e => {
                setPageNumber(1)
                setSearch(e.target.value)
            }} />
            <button onClick={(e) => {
                e.preventDefault();
            }} className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
        </form>
    )
}
