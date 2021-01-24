import React, { useEffect, useState } from 'react';
import { Data } from "./Data";
import BookCard from "./BookCard";
import '../style/home.css';
import { useHistory } from 'react-router-dom';

function Home() {
    const [booksdata] = useState(Data)
    const [currentlist, setCurrentList] = useState([])
    const [skip, setSkip] = useState(0)
    const history = useHistory()
    
    useEffect(() => {
        setCurrentList(booksdata.slice(0 + skip, 9 + skip))
    }, [booksdata, skip])

    function Prev() {
        if (skip > 0) {
            setSkip(skip - 10)
        }

    }

    function Next() {
        if (skip < booksdata.length) {
            setSkip(skip + 10)
        }
    }

    return (
        <div>
            
            <h1 className="title">Books</h1>
            <div className="row">
                <div className="cart-search">
                    <button className="search" onClick={() => history.push('/search')}>
                        <i className="fa fa-search" aria-hidden="true"></i>&nbsp;Click to search!
                    </button>
                    <button className="cart-icon" onClick={() => history.push('/cart')}><i className="fa fa-shopping-cart"></i></button>
                </div>

                {currentlist.map((data) => <div className="cards-container"><BookCard data={data} /></div>)}
                <div className="pagination">
                    <div className="prev" onClick={() => Prev()}> <i className="fa fa-arrow-left"></i> </div>
                    <div className="next" onClick={() => Next()}><i className="fa fa-arrow-right"></i></div>
                </div>
            </div>

        </div>
    )
}

export default Home;