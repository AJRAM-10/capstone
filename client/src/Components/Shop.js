import React from "react";
import { Link } from "react-router-dom"

function Shop() {
    return (
        <div>
            <h1>Shop By</h1>
            <div className="cigar-box">
                <h3>Cigars</h3>
                <Link to="/shop/cigars">
                    <button className="shop-now">SHOP</button>
                </Link>
            </div>
            <div className="bundles-box">
                <h3>Bundles</h3>
                <Link to="/shop/bundles">
                    <button className="shop-now">SHOP</button>
                </Link>
            </div>
        </div>
    )
}

export default Shop