import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../action';
import axios from 'axios';
import history from '../history';
import Swal from "sweetalert2";

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

const detail = async (path) =>
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
        Swal.fire({
            icon: 'error',
            title: 'error',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

function* loadProductDetail(payload) {
    const { id } = payload;
    // console.log(response.data,'ini data');
    try {
        const data = yield call(detail, `${PATH}/${id}`);
        yield put(actions.loadProductDetailSuccess(data));
        history.push(`detail/${id}`)
    } catch (error) {
        console.log(error);
        yield put(actions.loadProductDetailFailure());
        Swal.fire({
            icon: 'error',
            title: 'error',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

function* addProduct(payload) {
    const { title, rate, description, price, brand, detail_product, colors, capacities, file } = payload;
    let id = Date.now()
    yield put(actions.addProductRedux(id, title, rate, description, price, brand, detail_product, colors, capacities, file))
    // console.log('filename', file);
    try {
        let itemSent = {
            id, title, rate, description, price, brand, detail_product,
            ...(colors instanceof Array && { colors: JSON.stringify(colors) }),
            ...(capacities instanceof Array && { capacities: JSON.stringify(capacities) }),
            ...(file && { file })
        }
        const formData = new FormData();
        Object.keys(itemSent).forEach(key => {
            formData.append(key, itemSent[key])
        })

        const data = yield call(add, PATH, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(itemSent, 'ini add data')
        yield put(actions.addProductSuccess(data));
        history.push('/')
    } catch (error) {
        console.log(error, 'erorrrrrrrrrrrrrrr');
        yield put(actions.addProductFailure(id));
        Swal.fire({
            icon: 'error',
            title: 'error',
            showConfirmButton: false,
            timer: 1500
        })
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
        Swal.fire({
            icon: 'error',
            title: 'error',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_PRODUCTS', loadProduct),
        takeEvery('LOAD_DETAIL', loadProductDetail),
        takeEvery('ADD_PRODUCT', addProduct),
        takeEvery('REMOVE_PRODUCT', deleteProduct)
    ]);
}