console.log('script is loaded');


const fetchAuthors = async () => {
  const response = await fetch("/authors");
  const data = await response.json();
  console.log("authors", data);
}

const fetchBooks = async () => {
  const response = await fetch("/books");
  const data = await response.json();
  console.log("books", data);
}

fetchAuthors();
fetchBooks();