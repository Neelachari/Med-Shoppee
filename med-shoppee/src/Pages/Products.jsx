import React from 'react'

export default function AllProducts() {

  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {/* Map the below div against product data */}
            <div>
                <h3 className = "name"> </h3>
                <div className= "brand"></div>
                <div className = "price"></div>
            </div>
      </div>
    </div>
  )
}