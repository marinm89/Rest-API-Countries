import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";
import CountryCard from "../components/card";
import filterRow from '../components/filterRow';
import FilterRow from "../components/filterRow";

export default function HomePage(props) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.filteredCountries);
  useEffect(() => {
    dispatch(actions.fetchCountries());
  }, [dispatch]);

  const countryClickHandler = (alpha3Code) => {
    console.log("alpha3Code");
  };

  return (
    <>
    <FilterRow/>
      {countries.length > 0 && (
        <div className="countries-wrapper">
          {countries.map((c) => (
            <CountryCard
              key={c.alpha3Code}
              country={c}
              clickHandler={() => countryClickHandler(c.alpha3Code)}
            />
          ))}
        </div>
      )}
    </>
  );
}
