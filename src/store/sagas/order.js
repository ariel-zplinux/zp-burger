import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions';

export function* purchaseBurgerSaga(action) {
    try{
        yield put(actions.purchaseBurgerStart());
        const response = yield axios.post( '/orders.json?auth=' + action.payload.token, action.payload.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.payload.orderData));
    }
    catch(error) {
        yield put(actions.purchaseBurgerFail( error ));
    }
};


export function* fetchOrdersSaga(action) {
    try {
        yield put(actions.fetchOrdersStart());
        const queryParams = '?auth=' + action.payload.token + '&orderBy="userId"&equalTo="' + action.payload.userId + '"';

        const response = yield axios.get( '/orders.json' + queryParams);
        const fetchedOrders = [];
        for ( let key in response.data ) {
            fetchedOrders.push( {
                ...response.data[key],
                id: key
            } );
        }
        yield put(actions.fetchOrdersSuccess(fetchedOrders));
    }
    catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
};