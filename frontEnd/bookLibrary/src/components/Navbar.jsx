import { Link } from 'react-router-dom'

const Navbar = () => {

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
      </div>
    </header>
  )
}

export default Navbar