import { put,call,takeEvery } from "redux-saga/effects";
import * as types from '../actions/countryAction/types';

const api = "https://restcountries.com/v3.1/all";

const getAPI = async () =>{
    console.log("RUN");
    const res = await fetch(api,{
        method:"GET",
    })
    const data = await res.json();
    return data;
}

function* fetchCountry () {
    const countryList = yield call(getAPI);
    yield put({type:types.FETCH_COUNTRY_SUCCESS,payload:countryList});
}

function* searchCountry (action) {
    const {term} = action;
    yield put({type: types.GET_SEARCH_TERM,payload:term});
}
function* filterCountry (action) {
    const {term} = action;
    yield put({type: types.GET_FILTER_TERM,payload:term});
}

function* countrySaga() {
    yield takeEvery(types.FETCH_COUNTRY_REQUEST,fetchCountry);
    yield takeEvery(types.GET_SEARCH_TERM,searchCountry);
    yield takeEvery(types.GET_FILTER_TERM, filterCountry)
}

export default countrySaga;