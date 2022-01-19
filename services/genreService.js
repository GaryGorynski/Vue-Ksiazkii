import axios from "axios";

export const fetchGenre = () =>
  axios.get("https://wolnelektury.pl/api/genres/");
