import React from 'react'
import { useState } from 'react'
import style from "./bookList.module.css"


const BookList = () =>{
    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ];

    const [books, setBooks] = useState(bookList);
    const[newBook, setNewBook] = useState();
    console.log(books)
    console.log(newBook)

   const deleteHandler = (item)=>{
        setBooks(books.filter((book) => book !== item))
        }

        const collectBookTitle = (e) => {
            setNewBook(e.target.value.trim())

        }
        const handleSubmit =(e)=>{ 
            e.preventDefault();
            if(newBook){
                setBooks(prevBook=>[...prevBook, newBook])

            }
        }

        const handleFilterBooks =(e)=>{
            e.preventDefault();
            let setSearchBookValue;
            setSearchBookValue = e.target.value.toLowerCase();
            setSearchBookValue(searchValue)
            
        }
        const filteredBooks = books.filter((book)=>book.toLowerCase().includes());

return(

    <div id= {style.wrapper}>
    <header>
        <div id = {style.pageBanner}>
            <h1 className = {style.title}> Book Collections</h1>
                    
            <p>Books</p>
            <form id={style.searchBooks}>
                <input type="text" placeholder="Search books..." onKeyUp={handleFilterBooks}/>
            </form>
        </div>
    </header>
    <div id={style.booklist}>
        <h2 className= {style.title}>Books to Read</h2>
        <ul>
            { filteredBooks.map((book,index)=>(

                <li key = {index}>
                    <span className={style.name}>{book}</span>
                    <span className={style.delete} onClick={ ()=> deleteHandler(book)}>delete</span>

                </li>

                ))
            }
        
           </ul>
    </div>
    <form onSummit = {handleSubmit}  id={style.addBook}>
        <input type="text" placeholder="Add a book..." onChange = {collectBookTitle} /> 
        <button>Add</button>
    </form>

</div>

)}


export default BookList;