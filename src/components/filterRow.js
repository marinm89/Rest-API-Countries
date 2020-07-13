import React from 'react';
import SearchInput from './searchInput';
import { searchCountry } from '../store/actions';
export default function FilterRow() {
    return (
        <div className='filter-row'>
            <SearchInput/>
        </div>
    )
}
