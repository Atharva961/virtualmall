import React from 'react'

function ProductItem(props) {
    return (
        <div>
            <div className="card m-3">
                <div className="card-body">
                    <h5>{props.prod.name}</h5>
                    <p>Category: {props.prod.category}</p>
                    <p>Brand: {props.prod.brand}</p>
                    <p>Cost: {props.prod.cost} <i class="fa-solid fa-indian-rupee-sign"></i></p>
                    <a href="/" className="btn btn-primary">Buy</a>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
