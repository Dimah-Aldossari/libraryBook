import axios from "axios";
import React, {useEffect} from "react";
function Profile() {
  const [books, setBooks] = React.useState([])
const id = localStorage.getItem("userId")

 useEffect(() => {
   const  getUserInfo = async () => {

    const response = await axios.get(`http://localhost:3000/api/user/${id}`);

    console.log(response.data.userBook);
    setBooks(response.data)
  }
  getUserInfo();

 })
 
  return (
    <div>
  <p>
    {books.map(item=>{<>
    <p>{item.title}</p>
    </>})}
  </p>
    </div>
  );
}

export default Profile;
