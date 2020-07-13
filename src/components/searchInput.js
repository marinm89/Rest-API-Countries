import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

export default function SearchInput() {
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
        if (searchTerm === searchInputRef.current.value) {
            
            searchTerm.length > 0 
            ? dispatch(actions.searchCountry(searchTerm))
            :dispatch(actions.fetchCountries());
        }
    }, 800);
    return() => {
        clearTimeout(timer);
    };
  }, [searchTerm, dispatch]);


  return (
    <div className="search-wrapper">
      <input
        ref={searchInputRef}
        value={searchTerm}
        type="text"
        onChange={(event) =>
          dispatch(actions.setSearchTerm(event.target.value))
        }
        name="searchCountry"
        placeholder="Search for a country..."
        id="searchCountry"
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
