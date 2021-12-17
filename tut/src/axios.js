import axios, { Axios } from "axios";

export const = Axios.create({baseURL: "http://localhost:9000",

  headers: { auth:"Simple Auth"},
  timeout: 3000,
  
});