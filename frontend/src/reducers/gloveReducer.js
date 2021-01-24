import gloveService from '../services/gloves'


const gloveReducer = (state = {data: []}, action) => {
    switch (action.type) {
        case 'INIT_GLOVES':
            return action.data
        default:
            return state
    }
}

export const initGloves = () => {
    return async dispatch => {
        const data = await gloveService.get50()
        dispatch({
            type: 'INIT_GLOVES', data
        })
    }
}

export default gloveReducer