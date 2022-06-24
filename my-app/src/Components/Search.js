
import React from "react";

const Search = (props) => {
    return(
       <div className="search-area">
           <form onSubmit={props.searchBook} className="form" action="">
               <input onChange={props.handleSearch} type="text" placeholder="название книги"/>
               <button type="submit">Найти</button>
               <select defaltvalue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">Сортировка</option>
                    <option value="Newest">relevance</option>
                    <option value="Oldest">newest</option>

        
               </select>
           </form>
       </div>
    )
}

export default Search;