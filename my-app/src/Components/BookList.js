import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map ((elem,i) => {
                    return <BookCard 
                            key={i}
                            image={elem.volumeInfo.imageLinks.smallThumbnail ? elem.volumeInfo.imageLinks.smallThumbnail : elem.volumeInfo.imageLinks.thumbnail}
                            title={elem.volumeInfo.title}
                            author={elem.volumeInfo.authors}
                            categories={elem.volumeInfo.categories[0]}
                            publishedDate={elem.volumeInfo.publishedDate}
                            />
                })
            
            }
        </div>   
    )
}

export default BookList;
