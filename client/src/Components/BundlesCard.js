import React from "react";

function BundlesCard({ bundle }) {
    return (
        <li className="card">
            <div>
                {/* <img src={cigar.cig_pic} alt={cigar.name} className="card-img"/> */}
                <div className="card-content">
                    <div>
                        <h3>{bundle.name}</h3>
                    </div>
                    <div>
                        <h3>{bundle.cigar.name}</h3>
                    </div>
                    <div>
                        <h3>${bundle.price}</h3>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default BundlesCard