import React from "react";
import { Link } from "react-router-dom"

function Shop() {
    return (
        <div className="shop">
            <h1>Shop By</h1>
            <ul className="card-list">
                <li className="card">
                    <div>
                        <h3>Cigars</h3>
                        <Link to="/shop/cigars">
                            <button className="button">SHOP</button>
                        </Link>
                    </div>
                </li>
                <li className="card">
                    <div className="card-contet">
                        <h3>Bundles</h3>
                        <Link to="/shop/bundles">
                            <button className="button">SHOP</button>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Shop