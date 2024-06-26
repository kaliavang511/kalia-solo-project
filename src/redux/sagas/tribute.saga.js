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




export default fetchTribute
