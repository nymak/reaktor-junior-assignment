const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case 'CHANGE':
            return action.data
        default:
            return state
    }
}

export const change = (pageNum) => ({
    type: 'CHANGE',
    data: pageNum
})

export default pageReducer