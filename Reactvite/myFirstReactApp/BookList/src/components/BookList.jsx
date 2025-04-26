import React from 'react'
import style from "./bookList.module.css"


const BookList = () =>{
    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ]
    

    const deleteHandler = (item)=>{
        // console.log(event)
        // bookList.filter((book) => book !== item)
    }

return(
    <div id= {style.wrapper}>
    <header>
        <div id = {style.pageBanner}>
            <h1 className = {style.title}> Book Collections</h1>
            
      <p>Books</p>
      <form id={style.searchBooks}>
        <input type="text" placeholder="Search books..." />
      </form>
        </div>
    </header>
    <div id={style.booklist}>
        <h2 className= {style.title}>Books to Read</h2>
        <ul>
            { bookList.map((book,index)=>(

            <li key = {index}>
                <span className={style.name}></span>
                <span className={style.delete} onClick={ ()=> deleteHandler(book)}>delete</span>
            </li>

            ))
            }
           

        </ul>
    </div>
    <form id={style.addBook}>
        <input type="text" placeholder="Add a book..." />
        <button>Add</button>
    </form>

</div>

)

}


export default BookList;