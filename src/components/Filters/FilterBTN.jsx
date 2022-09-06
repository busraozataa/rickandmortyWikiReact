import React from 'react'

export default function FilterBTN({ name, index, item, task, setPageNumber }) {
    return (
        <>
            <style jsx>
                {
                    `
                    .x:checked + label{
                        background-color:#0b5ed7;
                        color:#fff;
                    }
                    input[type="radio"]{
                        display:none;
                    }`
                }
            </style>
            <div className="form-check">
                <input className="form-check-input x" onClick={() => {
                    setPageNumber(1)
                    task(item)
                }} type="radio" name={name} id={`${name}${index}`} />
                <label className="btn btn-outline-primary" htmlFor={`${name}${index}`}>{item}</label>
            </div>
        </>
    )
}
