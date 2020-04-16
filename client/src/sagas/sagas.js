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
        .then((response) => response.data)
        .catch((err) => err);


const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => err);

const remove = async (path) => 
    // console.log(path,'aaaaaaaaaaaaaaaaaaaaa')
    await request.delete(path)
        .then(response => response.data)
        .catch(err => err);

/* function logic react saga start */

function* loadProduct() {
    try {
        const data = yield call(read, PATH);
        // console.log(data, 'ini sagas load')
        yield put(actions.loadProductSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadProductFailure());
    }
}

function* addProduct(payload) {
    const { title, rate, description, brand, price, detail_product } = payload;
    let id = Date.now()
    // console.log(payload, 'ini tambah data yes')
    yield put(actions.addProductRedux(id, title, rate, description, price, brand, detail_product))
    try {
        const data = yield call(add, PATH, {id, title, rate, description, price, brand, detail_product});
        console.log(data, 'ini add data')
        yield put(actions.addProductSuccess(data));
        history.push('/')
    } catch (error) {
        console.log(error);
        yield put(actions.addProductFailure(id));
    }
}

function* deleteProduct(payload) {
    const { id } = payload;
    console.log(payload)
    yield put(actions.deleteProductRedux(id))
    try {
        const data = yield call(remove, `${PATH}/${id}`);
        // console.log(data,'ini hasil delete data')
        yield put(actions.deleteProductSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.deleteProductFailure(id));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_PRODUCTS', loadProduct),
        takeEvery('ADD_PRODUCT', addProduct),
        takeEvery('REMOVE_PRODUCT', deleteProduct)
    ]);
}