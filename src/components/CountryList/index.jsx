import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContryRequest } from "../../redux/actions/countryAction/actions";

const CountryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContryRequest());
  }, [dispatch]);
  return <div></div>;
};

export default CountryList;
