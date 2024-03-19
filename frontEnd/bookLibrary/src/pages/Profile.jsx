import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
function Profile() {
	const [books, setBooks] = useState([]);
	const [user, setUser] = useState({});
	// const { id } = useParams(); // استخراج الباراميتر id من العنوان (URL)

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const id = localStorage.getItem("userId");

			const response = await axios.get(
				`http://localhost:3000/api/user/users/${id}`
			);
			setUser(response.data.user);
			setBooks(response.data.books);
		} catch (error) {
			console.error("Error fetching user info:", error);
		}
	};
	return (
		<div>
			<h2>User Books</h2>
			<h3>{user.email}</h3>

			{Array.isArray(books) ? (
				books.map((book) => (
					<div key={book._id}>
						<h3>{book.title}</h3>
						<p>{book.description}</p>
						{/* Render other book details as needed */}
					</div>
				))
			) : (
				<p>No books found.</p>
			)}
		</div>
	);
}

export default Profile;
