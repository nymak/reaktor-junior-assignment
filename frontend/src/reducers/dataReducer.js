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

export const init = () => (
    async dispatch => {
        const data = await dataService.get50()
        dispatch({
            type: 'INIT', data
        })
    }
)


export const getAll = () => (
    async dispatch => {
        const data = await dataService.getAll()
        dispatch({
            type: 'INIT', data
        })
    }
)

export default dataReducer