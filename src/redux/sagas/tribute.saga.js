import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';


function* fetchTribute(){
    try{
        const tributeItem = yield axios.get(`/api/tribute`)
        yield put ({type: "SET_TRIBUTE_ITEM", payload: tributeItem.data})
    } catch(error){
        console.log('error with the tribute get request', error)
    }
}

function * addTribute(action){
    try{
        yield((axios.post,'/api/tribute',action.payload))
        yield put({type: 'FETCH_TRIBUTE'})
     } catch (error){
            console.log('error with post request'.error)
    }
}


function * tributeSaga(){
    yield takeLatest('FETCH_TRIBUTE',fetchTribute)
    yield takeLatest('ADD_TRIBUTE',addTribute)
}
export default tributeSaga
