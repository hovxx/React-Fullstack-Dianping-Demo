import * as ActionTypes from './actionTypes'

export function updateUserInfo(data) {
    return{
        type:ActionTypes.USERINFO_UPDATE,
        data
    }
}

export function startFetch() {
    return{
        type:ActionTypes.START_FETCH
    }
}

export function fetchError() {
    return{
        type:ActionTypes.FETCH_ERROR
    }
}