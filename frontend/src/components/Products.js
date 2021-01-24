import React from 'react'
import { useSelector } from "react-redux";

const Product = ({ product }) => (
    <>
        <td>{product.name}</td>
        <td>{product.color.join(', ')}</td>
        <td>{product.manufacturer}</td>
        <td>{product.price}</td>
        <td>{product.type}</td>
        <td>{product.in_stock}</td>
    </>
)

const Products = ({ product }) => {
    const products = useSelector(state => state[product])

    return (
            <table>
                <tbody>
                <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Color</strong></td>
                    <td><strong>Manufacturer</strong></td>
                    <td><strong>Price</strong></td>
                    <td><strong>Type</strong></td>
                    <td><strong>Stock</strong></td>
                </tr>
                    {products.data.map(prod =>
                        <tr key={prod.id}>
                            <Product product={prod} />
                        </tr>
                    )}
                </tbody>
            </table>
    )
}

export default Products