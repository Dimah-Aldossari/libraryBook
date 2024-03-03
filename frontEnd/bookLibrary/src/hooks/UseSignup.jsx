import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UseSignup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/user/signup', formData);
        console.log(response.data);
        
        // حفظ معرّف المستخدم في التخزين المحلي
        
        navigate("/UseLogin");
    
        // Handle successful sign-up (redirect, show success message, etc.)
      } catch (error) {
        console.error('Sign-up failed:', error.response.data);
        setError(error.response.data.error);
      }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default UseSignup;
