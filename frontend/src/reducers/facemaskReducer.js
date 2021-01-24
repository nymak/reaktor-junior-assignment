import facemaskService from '../services/facemasks'


const facemaskReducer = (state = {data: []}, action) => {
    switch (action.type) {
        case 'INIT_MASKS':
            return action.data
        default:
            return state
    }
}

export const initFacemasks = () => {
    return async dispatch => {
        const data = await facemaskService.get50()
        dispatch({
            type: 'INIT_MASKS', data
        })
    }
}

export default facemaskReducer