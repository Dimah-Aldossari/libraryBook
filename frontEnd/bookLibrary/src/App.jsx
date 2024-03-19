import {  Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar'
import CreateBook from './components/CreateBook';
import UseSignup from './hooks/UseSignup';
import UseLogin from './hooks/UseLogin';
import Profile from './pages/Profile';


function App() {

  return (
    <div className="App">
  
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
              <Route 
              path="/BookDetails" 
              element={<BookDetails />} 
            />
              <Route 
              path="/CreateBook" 
              element={<CreateBook />} 
            />
            <Route 
              path="/UseSignup" 
              element={<UseSignup />} 
            />
              <Route 
              path="/UseLogin" 
              element={<UseLogin />} 
            />
           
               <Route 
              path="/Profile/:id" 
              element={<Profile />} 
            />
          </Routes>
        </div>
  
    </div>
  );
}

export default App;