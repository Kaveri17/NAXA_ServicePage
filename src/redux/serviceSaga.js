import { put, takeEvery } from "redux-saga/effects";
import { GET_SERVICES, SET_SERVICES } from "./constant";

function* getServices(){
    let data = yield fetch("https://admin.naxa.com.np/api/services")
    data = yield data.json()
    data = data.sort((a,b) => a.service_order - b.service_order)
    yield put({type: SET_SERVICES,data})
}

function* serviceSaga()
{
    yield takeEvery(GET_SERVICES, getServices)
}
export default serviceSaga;
