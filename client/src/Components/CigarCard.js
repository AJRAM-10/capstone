import React from "react";

function CigarCard({ cigar }) {
    return (
        <li className="card">
            <div>
                <img src={cigar.cig_pic} alt={cigar.name} className="card-img"/>
                <div className="card-content">
                    <div>
                        <h3>{cigar.name}</h3>
                    </div>
                    <div>
                        <h3>{cigar.brand}</h3>
                    </div>
                    <div>
                        <h3>{cigar.size}</h3>
                    </div>
                    <div>
                        <h3>{cigar.strength}</h3>
                    </div>
                    <div>
                        <h3>{cigar.flavor}</h3>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CigarCard