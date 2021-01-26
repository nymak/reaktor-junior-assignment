import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import pageReducer from "../reducers/pageReducer";
import Pager from "./Pager";


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
    const page = useSelector(state => state.page)
    const products = useSelector(state => state["data"]["data"][product][page-1])
    const allProducts = useSelector(state => state["data"]["data"][product].flat())

    return (
        <>
            <Pager
                products={allProducts}
                currentPage={page}
            />
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
                    {products.map(prod =>
                        <tr key={prod.id}>
                            <Product product={prod} />
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Products