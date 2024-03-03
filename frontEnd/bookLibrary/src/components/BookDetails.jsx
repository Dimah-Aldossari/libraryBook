import React from "react";
import axios from "axios";

function BookDetails() {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    getData()
  }, []);

  const deleteBook = (id) => {
    console.log(id); 

    axios.delete(`http://localhost:3000/api/books/${id}`)
      .then(() => {
     
        setBooks(books.filter(book => book.id !== id));
        getData()
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  const getData =()=>{

    axios.get("http://localhost:3000/api/books")
    .then((res) => setBooks(res.data))
    .catch((error) => console.error("Error fetching data:", error));
}
  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book._id}>
            <img src={book.image} alt={book.title} width="10%" height="100vh" />
            <p>title: {book.title}</p>
            <p>description: {book.description}</p>
            <button onClick={() => deleteBook(book._id)}>delete</button>
            <hr />
          </div>
        ))
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

export default BookDetails;
