import axios from "axios";

export const api = axios.create({
  //baseURL: 'http://localhost:3333' - ambiente Local
  baseURL: 'https://foodexplorer-api-qbp5.onrender.com'
});