import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './css/Search.scss';

const Search = (props) => {

    return (
        <div className="drawerHeader">
            <div className="searchContainer">
                <div className="searchIcon">
                    <SearchIcon className="icon" />
                </div>
                <div className="searchBox">
                    <input
                        placeholder="Search…"
                        className="input"
                        onChange={props.searchText}
                    />
                </div>
            </div>
        </div>
    );

}

export default Search;
