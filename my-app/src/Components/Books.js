import React, { Component } from 'react';
import Search from './Search';
import request from 'superagent';
import BookList from './BookList';
import BookCard from './BookCard';

class Books extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault()
        request
            .get('https://www.googleapis.com/books/v1/volumes?')
            .query({q: this.state. searchField})
            .then((data) => {
                const cleanData = this.cleanData(data)
                this.setState({books: cleanData})
            })
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value})
    }

    handleSort = (e) => {
        this.setState({sort: e.target.value})
    }

    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false ) {
                book.volumeInfo['publichedDate'] = '0000'
            }
            else if (book.volumeInfo.hasOwnProperty('imageLinks') === false ) {
                book.volumeInfo['imageLinks'] = {thumbnail: 'https://brilliant24.ru/files/cat/template_01.png'}
            }
            return book
        })
        return cleanedData
    }
    render() {
        const sortedBooks = this.state.books.sort((a,b) => {
            if (this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }

           else if (this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        })
        return (
            <div>
                <Search searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
                <BookList books={sortedBooks} />  
            </div>
        )
    }
}
export default Books;
