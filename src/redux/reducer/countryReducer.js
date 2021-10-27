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
        case actions.SEARCH_COUNTRY:return{...state,searchTerm:payload};
        case actions.FILTER_COUNTRY:return {...state,filterTerm:payload}
        default: return state;
    }
}