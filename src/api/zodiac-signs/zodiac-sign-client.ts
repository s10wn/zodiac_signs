import axios from "axios";

export const zodiacSignClient = axios.create({
  // baseURL: import.meta.env.API_HOST_URL,
  baseURL: "https://poker247tech.ru",
});
