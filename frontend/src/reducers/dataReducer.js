import dataService from '../services/data'

const initialState = {
    data: {
        beanies: [[]],
        facemasks: [[]],
        gloves: [[]]
    }
}


const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
        default:
            return state
    }
}


export const getAll = () => (
    async dispatch => {
        const data = await dataService.getAll()
        dispatch({
            type: 'INIT', data
        })
    }
)

export default dataReducer