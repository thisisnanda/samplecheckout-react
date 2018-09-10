import axios from 'axios';

export function loginCheck(payload) {
    return (dispatch, getState) => {
        axios.post('/login', {
            email: payload.email,
            password: payload.password
        })
        .then(function (response) {
            dispatch({
                type: 'LOGIN_REQUEST',
                data: {...response.data, login: true}
            })

        })
        .catch(function (error) {
            dispatch({
                type: 'LOGIN_REQUEST',
                data: {login: false}
            })
        });
    }
}

export function payNow(payload) {
    return (dispatch, getState) => {
        axios.post('/pay', payload)
            .then(function (response) {
                    dispatch({
                        type: 'PAY_NOW',
                        data: response.data
                    })
            })
            .catch(function (error) {

            });
    }
}
