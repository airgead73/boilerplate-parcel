console.log('script is loaded');

const fetchAuthors = async () => {
  const response = await fetch("http://localhost:5000/authors");
  const data = await response.json();
  console.log("authors", data);
}

const fetchBooks = async () => {
  const response = await fetch("http://localhost:5000/books");
  const data = await response.json();
  console.log("books", data);
}

fetchAuthors();
fetchBooks();