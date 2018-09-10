import * as action from '../actions.es6'
import axios from 'axios';

jest.mock('axios', () => {
    return {
        post: (url, params) => {
            if(url == '/login') {
                return Promise.resolve({})
            } else if(url == '/pay') {
                return Promise.resolve({})
            }
        },
        get: () => {}
    }
})


describe('Test actions', () => {

    it('test payNow', () => {
    const methods = {
                dispatch: jest.fn(),
                getState: jest.fn()
            };
        action.payNow({})(methods.dispatch, methods.getState);
        const spy = jest.spyOn(methods, 'dispatch')
        // expect(spy).toHaveBeenCalled()
    })
})
