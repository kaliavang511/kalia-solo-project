import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTribute(){
    try{
        const tributeItem = yield call (axios.get,`/api/tribute`)
        //attemping to send a get request
        yield put ({type: "SET_TRIBUTE_ITEM", payload: tributeItem.data})
        //if successful then dispatch an action to "SET_TRIBUTE_ITEM" 
        //SET_TRIBUTE_ITEM has access the data being stored in there
    } catch(error){
        console.log('error with the tribute get request', error)
        //if fails then console.log an error message

    }
}

  
function* addTribute(action){
    try{
        yield call(axios.post, '/api/tribute', action.payload);
        //trying to a make post request and sending over data to create a new tribute entry
        yield put({type: 'FETCH_TRIBUTE'})
        //if it goes through then dispatch an action to "FETCH_TRIBUTE"
    } catch (error){
        console.log('error with post request',error)
        //if fails then console.log an error message 
    }
}



function* deleteTribute(action) {
    try {
        yield call(axios.delete, `/api/tribute/${action.payload}`);
        yield put({ type: 'FETCH_TRIBUTE' });
    } catch (error) {
        console.log('Error with delete request', error);
    }
}

function* updateTribute(action) {
    try {
        yield call(axios.put, `/api/tribute/${action.payload.id}`, action.payload);
        //making a put requestion and sending over the ID and data to update our data
        yield put({ type: 'FETCH_TRIBUTE' });
    } catch (error) {
        console.log('Error with update request', error);
    }
}

function* tributeSaga(){
    yield takeLatest('FETCH_TRIBUTE', fetchTribute)
    yield takeLatest('ADD_TRIBUTE', addTribute)
    yield takeLatest('DELETE_ITEM', deleteTribute)
    yield takeLatest('UPDATE_TRIBUTE', updateTribute);
    //listen to action type then run the the function
}

export default tributeSaga;
