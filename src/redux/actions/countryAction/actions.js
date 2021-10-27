import * as types from './types';

export const fetchContryRequest = () => {
    return{
        type: types.FETCH_COUNTRY_REQUEST
    }
}

export const searchCountry = (term) => {
    return{
        type: types.SEARCH_COUNTRY,
        term,
    }
}

export const filterCountry = (term) => {
    return{
        type: types.FILTER_COUNTRY,
        term,
    }
}