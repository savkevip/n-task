import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE, LOAD_USER } from '../constants/tableConstants'

export const getData = () => ({
    type: GET_DATA
});

export const getDataSuccess = payload => ({
    type: GET_DATA_SUCCESS,
    payload
});

export const getDataFailure = () => ({
    type: GET_DATA_FAILURE
});

export const loadUser = payload => ({
    type: LOAD_USER,
    payload
});