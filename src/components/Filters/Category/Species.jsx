import React from 'react'
import FilterBTN from '../FilterBTN';

export default function Species({ setSpecies, setPageNumber }) {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Species
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                    {
                        species.map((item, index) => <FilterBTN task={setSpecies} setPageNumber={setPageNumber} key={index} name="species" index={index} item={item} />)
                    }
                </div>
            </div>
        </div>
    )
}
