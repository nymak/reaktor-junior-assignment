import React from 'react'
import Pagination from 'bulma-pagination-react'
import {useDispatch} from "react-redux";
import {change} from "../reducers/pageReducer";

const POSTS_PER_PAGE = 50;

// Component for pagination
const Pager = ({products, currentPage, perPage = POSTS_PER_PAGE}) => {
    const dispatch = useDispatch()
    const pages = Math.ceil(products.length / POSTS_PER_PAGE)

    return (
        <Pagination
            pages={pages}
            currentPage={currentPage}
            onChange={page => dispatch(change(page))}
            visibleRadius={2}
        />
    )
}

export default Pager