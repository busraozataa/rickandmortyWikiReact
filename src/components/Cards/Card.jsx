import React from 'react'
import styles from "./Cards.module.scss"

export default function Card({ results }) {
    
    return (
        <>
            {
                results ?
                    results.map((x) => {
                        let { id, name, image, location, status } = x;
                        return (
                            <div className='col-lg-4 col-md-6 mb-4 position-relative' key={id}>
                                <div className={styles.cards}>
                                    <img src={image} className="img-fluid w-100" alt="" />
                                    <div className='content' style={{ padding: "10px" }}>
                                        <div className='fs-5 fw-bold mb-4'>{name} </div>
                                        <div className=''>
                                            <div className='fs-6'>Last location</div>
                                            <div className='fs-5'>{location.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`position-absolute badge ${styles.badge} ${status === "Alive" ? "bg-success" : status === "Dead" ? "bg-danger" : "bg-secondary"}`}>
                                    {status}
                                </div>
                            </div>
                        )
                    })
                    : <div> <span>No Characters Found :/</span> </div>
            }

        </>
    )
}
