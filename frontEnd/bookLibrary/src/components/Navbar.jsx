import { Link ,useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <Link to="/BookDetails">
          <h1>Book Store</h1>
        </Link>
        <Link to="/CreateBook">
          <h1>CreateBook</h1>
        </Link>
        <button onClick={() => {
  const userID = localStorage.getItem("userId");
  if (userID) {
    navigate(`/Profile/${userID}`);
  } else {
    // Handle case where userID is not found in localStorage
    console.error("userID not found in localStorage");
  }
}}>Profile</button>

      </div>
    </header>
  )
}

export default Navbar