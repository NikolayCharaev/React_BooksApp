import React from "react";
const BookCard = (props) => {
    
    return (
        <div className='card-container'>
            <img className="card-image" src={props.image} alt="#" />
            <div className="desc">
                <h2 className="desc-title">{props.title ? props.title : ' '}</h2>
                <h4 className="desc-author">{props.author ? props.author : ' '}</h4>
                <p className="desc-author">{props.categories ? props.categories : ' '}</p>
                <p className="desc-published">{props.publishedDate ? props.publishedDate.slice(0,4) : ' '}</p>
            </div>
        </div>   
    )
}



export default BookCard;