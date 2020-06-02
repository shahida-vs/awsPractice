const initialState = {
    isRegisteredUser: false
}
const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_USER':
            const obj = action.value
            return {
                ...state,
                ...obj
            }
        default:
            return state
    }
}
export default AppReducer