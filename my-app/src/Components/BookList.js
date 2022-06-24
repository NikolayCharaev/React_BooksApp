import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map ((elem,i) => {
                    let amount = elem.saleInfo.listPrice 
                    let amountTest = elem.saleInfo.listPrice && elem.saleInfo.listPrice.amount
                    if (amount != undefined) {
                        // if (amountRes) {
                            if (amount != undefined) {
                    return <BookCard 
                            key={i}
                            image={elem.volumeInfo.imageLinks.smallThumbnail ? elem.volumeInfo.imageLinks.smallThumbnail : elem.volumeInfo.imageLinks.thumbnail}
                            title={elem.volumeInfo.title}
                            author={elem.volumeInfo.authors}
                            categories={elem.volumeInfo.categories[0]}
                            publishedDate={elem.volumeInfo.publishedDate}
                            // amount={amountTest ? Math.trunc(amountTest) + ' ₽' : ' '}
                            />
                        }    
                    }   
                })
            }
        </div>   
    )
}

export default BookList;