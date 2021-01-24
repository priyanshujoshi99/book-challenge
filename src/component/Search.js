import React, { useState, useEffect } from 'react';
import "../style/search.css";
import { useHistory } from 'react-router-dom';
import { Data } from "./Data";
import BookCard from "./BookCard";

function Search() {
    const [data] = useState(Data)
    const [searchvalue, setSearchValue] = useState(null)
    const [searchdata, setSearchData] = useState(null)
    const history = useHistory()


    function SearchFilter() {
        let sev = data.filter(data => data.authors.indexOf(searchvalue) > -1)
        setSearchData(sev);
    }

    useEffect(() => { }, [searchdata])

    return (
        <div>
            <div className="close" onClick={() => history.push('/')}><i className="fa fa-times" aria-hidden="true"></i></div>
            <div className="search-icon">
                <input type="text" value={searchvalue} placeholder={"Enter the name author"} onChange={(e) => setSearchValue(e.target.value)} />
                <button onClick={() => SearchFilter()}><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
            {searchdata && searchdata.map((data) => <div className="cards-container"><BookCard data={data} /></div>)}
        </div>
    )
}

export default Search;