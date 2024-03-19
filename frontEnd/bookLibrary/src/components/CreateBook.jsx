import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

function CreateBook() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    const decoded = jwtDecode(token);

    const [form, setForm] = useState({
        title: '',
        image: '',
        description: '',
    });

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        setUser(decoded._id)
    }, [decoded])
    
    const addBook = async () => {




        // if (!token) {
        //     navigate("/UseLogin");
        //     return;
        // }

        // إضافة التوكن إلى رأس الطلب
        // const headers = {
        //     'Authorization': `Bearer ${token}`
        // };
        await axios.post('http://localhost:3000/api/books', {
            title: form.title,
            image: form.image,
            description: form.description,
            userId: user
        })
          .then(function (response) {
            console.log(response);
            navigate("/BookDetails");
          })
          .catch(function (error) {
            console.log(error);
            setError('An error occurred while adding the book.');

          });
      

        }

    return (
        <div>
            <label>
                Title:
                <input
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                />
            </label>
            <label>
                Image:
                <input
                    value={form.image}
                    onChange={e => setForm({...form, image: e.target.value})}
                />
            </label>
            <label>
                Description:
                <input
                    value={form.description}
                    onChange={e => setForm({...form, description: e.target.value})}
                />
            </label>
            <button onClick={addBook}>Add Book</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default CreateBook;
