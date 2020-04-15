import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../action';
import axios from 'axios'
import history from '../history'

const API_URL = 'http://localhost:3000/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});
const PATH = 'barang';


const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => err);


const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => err);


function* loadProduct() {

    try {
        const data = yield call(read, PATH);
        yield put(actions.loadProductSuccess(data));
        // console.log(data,'ini dataaaaaaaa')
    } catch (error) {
        console.log(error);
        yield put(actions.loadProductFailure());
    }
}

function* addProduct(payload) {
    const { title, rate, description, brand, price, detail_product } = payload;
    // console.log(payload, 'ini tambah data yes')
    yield put(actions.addProductRedux(title, parseInt(rate), description, price, parseInt(brand), detail_product))
    try {
        const data = yield call(add, PATH, { title, rate, description, price, brand, detail_product });
        console.log(data,'ini add data')
        yield put(actions.addProductSuccess(data));
        history.push('/')
    } catch (error) {
        console.log(error);
        yield put(actions.addProductFailure());
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_PRODUCTS', loadProduct),
        takeEvery('ADD_PRODUCT', addProduct)
    ]);
}