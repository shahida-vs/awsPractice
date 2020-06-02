import { get, set, cloneDeep } from 'lodash';


const initialState = {
    email: '',
    emptyFields: true,
    error: '',
    password: '',
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            // const email = get(action.value, 'email', state.email)
            // const password = get(action.value, 'password', state.password)
            const obj = action.value
            return {
                ...state,
                ...obj
            }
        default: return state
    }

}
export default loginReducer;