const initialState = {
    selectedCategory: '',
    subItems: [],
    description: '',
    selectedSubCategory: '',
}
const SelectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORY_SELECTION':
            const obj = action.value
            return {
                ...state,
                ...obj
            }
        default:
            return state
    }
}
export default SelectionReducer