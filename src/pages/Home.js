import {React, useState} from 'react';
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import BookCard from '../components/BookCard.js';

const Home = () => {
    const [searchItem, setSearchItem] = useState('');
    const [books, setBooks]=useState([]);
    const handleSearch = () => {
        console.log("The function to handle the fetch");
        // fetch the api
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error ("Unable to fetch the Bookstore Database...")
            } return res.json();
        })
        .then((data) => {
            console.log(data.items)
            setBooks(data.items)
        })
        .catch((err) => {
            console.log(err);
        })
    };
    return ( 
        <>
            <Navbar />
            <Hero 
            searchItem={searchItem} 
            setSearchItem={setSearchItem}
            onSearch={handleSearch}
            />
             {books.map((book) => {
                return <BookCard
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                    previewLink={book.volumeInfo.previewLink}
                />
             })}
             
        </>
     );
}
 
export default Home;