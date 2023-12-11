import React, { useState,useEffect } from "react";
import "./Allbooks.css";
import axios from "axios";
import { Item } from "semantic-ui-react";
function Allbooks() {
  const API_URL = process.env.REACT_APP_API_URL
  const [allbooks,setallbooks] = useState([]);
  useEffect(() => {
    const getallBooks = async () => {
        const response = await axios.get("http://localhost:4000/api/books/allbooks")
        setallbooks(response.data.slice(0,20));
    }
    getallBooks();
    console.log(allbooks);
}, [API_URL])
  return (
    <div className="books-page">
      <div className="books">
        { 
         allbooks.map((Item)=>{
            return (
              <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">{Item.Title}</p>
          <p className="bookcard-author">{Item.Author1}</p>
        </div>
            )
          })
        }
    
      </div>
    </div>
  );
}

export default Allbooks;