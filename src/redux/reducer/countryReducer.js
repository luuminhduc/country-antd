import * as actions from '../actions/countryAction/types';

const initialState = {
    countryList:[],
    searchTerm:"",
    filterTerm:""
}

export default function(state=initialState,action) {
    const {type,payload} = action;
    switch(type) {
        case actions.FETCH_COUNTRY_SUCCESS:return {...state,countryList:payload};
        case actions.GET_SEARCH_TERM:return{...state,searchTerm:payload};
        case actions.GET_FILTER_TERM:return {...state,filterTerm:payload}
        default: return state;
    }
}