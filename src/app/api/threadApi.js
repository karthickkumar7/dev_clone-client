import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/threads",
});

export const getAllthreadsApi = async () => {
  return await API.get("/");
};

export const getSinglethreadsApi = async (payload) => {
  return await API.get(`/${payload}`);
};
