import axios from "axios";

export const fetchCollection = () =>
  axios.get("https://wolnelektury.pl/api/collections/");
