import React from 'react'
import { useSelector } from "react-redux";

const Gloves = () => {
    const gloves = useSelector(state => state.gloves )
    return (
            <table>
                <tbody>
                <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Color</strong></td>
                    <td><strong>Manufacturer</strong></td>
                    <td><strong>Price</strong></td>
                    <td><strong>Type</strong></td>
                    <td><strong>In stock</strong></td>
                </tr>
                    {gloves.map(glove =>
                        <tr key={glove.id}>
                            <td>{glove.name}</td>
                            <td>{glove.color}</td>
                            <td>{glove.manufacturer}</td>
                            <td>{glove.price}</td>
                            <td>{glove.type}</td>
                            <td>{glove.in_stock}</td>
                        </tr>
                    )}
                </tbody>
            </table>
    )
}

export default Gloves