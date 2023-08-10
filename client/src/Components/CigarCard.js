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
                        <span>Size: {cigar.size}</span>
                    </div>
                    <br></br>
                    <div>
                        <span>Strength: {cigar.strength}</span>
                    </div>
                    <br></br>
                    <div>
                        <span>Flavor Profile: {cigar.flavor}</span>
                    </div>
                    <br></br>
                </div>
            </div>
        </li>
    )
}

export default CigarCard