import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/threads",
});

export const getAllthreads = async () => {
  return await API.get("/");
};
