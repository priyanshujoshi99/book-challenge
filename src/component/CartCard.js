import React from 'react';
import "../style/cartcard.css";
import ReactStars from "react-rating-stars-component";

function CartCard(props) {
    return (
        <div>
        <div className="card-container" id={props.data.bookID}>
            <div className="title"><strong>{props.data.title}</strong></div>
            <div className="more-info">
                <div className="author"><i className="fa fa-user"></i>&nbsp;<span>Author :</span>&nbsp;{props.data.authors}</div>
                <div className="language"><span>Language :</span>&nbsp;{props.data.language_code}</div>
                <div className="isbn"><span>ISBN :</span>&nbsp;{props.data.isbn}</div>
                <div className="rating"><ReactStars
                    count={5}
                    value={props.data.average_rating}
                    size={20}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="red"
                />({props.data.ratings_count})</div>
            </div>
            
                    <div className="price"><span>Price :&nbsp;</span> {props.data.price}</div>
                    <div className="del" onClick={() => props.ItemRemove(props.data.bookID)}><i className="fa fa-trash del-icon" aria-hidden="true"></i>&nbsp; <span>Remove from cart</span></div>
                
            </div>

        </div>
    )
}

export default CartCard;