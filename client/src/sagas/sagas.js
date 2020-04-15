import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../action';
import axios from 'axios'
import history from '../history'

const API_URL = 'http://localhost:3000/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => err);


const add = async (path, params) =>
    await request.add(path, params)
        .then(response => response.data)
        .catch(err => err);

const PATH = 'barang';

function* loadProduct() {

    try {
        const data = yield call(read, PATH);
        yield put(actions.loadProductSuccess(data));
        console.log(data,'ini dataaaaaaaa')
    } catch (error) {
        console.log(error);
        yield put(actions.loadProductFailure());
    }
}

function* addProduct(payload) {
    const {id, title, description, brand, price, detail_product } = payload;
    yield put(actions.addProductRedux( title, description, brand, price, detail_product))
    try {
        const data = yield call(add, PATH, {title, description, brand, price, detail_product });
        yield put(actions.addProductSuccess(data));
        history.push('/')
    } catch (error) {
        console.log(error);
        yield put(actions.addProductFailure(id));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_PRODUCTS', loadProduct),
        takeEvery('ADD_PRODUCT', addProduct)
    ]);
}