import axios from "axios";

export const fetchAuthors = () =>
  axios.get("https://wolnelektury.pl/api/authors/");
