import React from 'react'
import {useSelector} from "react-redux";
import Pager from "./Pager";

const Product = ({product}) => (
    <>
        <td>{product.name}</td>
        <td>{product.color.join(', ')}</td>
        <td>{product.manufacturer}</td>
        <td>{product.price}</td>
        <td>{product.type}</td>
        <td>{product.in_stock}</td>
    </>
)

const Products = ({product}) => {
    const page = useSelector(state => state.page)
    const products = useSelector(state => state["data"]["data"][product][page - 1])
    const allProducts = useSelector(state => state["data"]["data"][product].flat())

    console.log(products)
    const style = {
        width: '100%'
    }

    return (
        <>
            <Pager
                products={allProducts}
                currentPage={page}
            />
            <table style={style} className={'table is-striped'}>
                <thead>
                    <tr>
                        <th><strong>Name</strong></th>
                        <th><strong>Color</strong></th>
                        <th><strong>Manufacturer</strong></th>
                        <th><strong>Price</strong></th>
                        <th><strong>Type</strong></th>
                        <th><strong>Stock</strong></th>
                    </tr>
                </thead>
                <tbody>
                {products.map(prod =>
                    <tr key={prod.id}>
                        <Product product={prod}/>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

export default Products