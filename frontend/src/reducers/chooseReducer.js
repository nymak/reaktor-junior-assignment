const chooseReducer = (state = 'gloves', action) => {
    switch (action.type) {
        case 'SET_CHOICE':
            return action.data
        default:
            return state
    }
}

export const choose = (choice) => ({
        type: 'SET_CHOICE',
        data: choice
    }
)

export default chooseReducer