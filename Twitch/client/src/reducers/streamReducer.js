import _ from 'lodash';
import {CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';
//import streams from '../apis/streams';

export default (state={},action)=>{
    switch(action.type){
        case FETCH_STREAMS:
            console.log("without loadash",action.payload);
            console.log("after destructring",{..._.mapKeys(action.payload,'id')});

            return {...state,..._.mapKeys(action.payload,'id')}
        case EDIT_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case DELETE_STREAM:
            return _.omit(state,action.payload)
        default:
            return state;
    }
}
