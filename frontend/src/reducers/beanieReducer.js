import beanieService from '../services/beanies'


const beanieReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_BEANIE':
            return action.data
        default:
            return state
    }
}

export const initGloves = () => {
    return async dispatch => {
        const data = await beanieService.get50()
        dispatch({
            type: 'INIT_BEANIE', data
        })
    }
}

export default beanieReducer