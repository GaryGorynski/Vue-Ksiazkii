import axios from "axios";

export const fetchBooks = () => axios.get("https://wolnelektury.pl/api/books/");
