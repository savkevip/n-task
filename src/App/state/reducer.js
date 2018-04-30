import {GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE, LOAD_USER} from '../constants/tableConstants'

const initState = {
    data: [],
    loading: true,
    selectedUser: {}
};

export default (state = initState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                loading: true
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            };
        case GET_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: payload
            };
        case LOAD_USER:
            const selectedUser = state.data.filter(user => user.id === Number.parseInt(payload));
            return {
                ...state,
                selectedUser: selectedUser[0] || undefined
            };
        default:
            return state;
    }
};