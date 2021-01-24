import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartStatus } from '../utils/CartAdded';
import CartCard from "./CartCard";
import "../style/cards.css"

function Cart() {
    const history = useHistory()
    const [data, setData] = useState(CartStatus.getStatus())
    function ItemRemove(id) {
        CartStatus.Deleted(data.filter((data) => data.bookID !== id))
        setData(CartStatus.getStatus())
    }

    return (
        <div>
            <div className="close" onClick={() => history.push('/')}><i className="fa fa-times" aria-hidden="true"></i></div>
                {data.length ? data.map((data) => <div className="cards"><CartCard data={data} ItemRemove={ItemRemove} /></div>) : <h1 className="empty-alert">Cart is empty, please add books to cart!!</h1>}          
        </div>
    )
}

export default Cart;