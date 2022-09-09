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

export const createThreadApi = async (payload) => {
  return await API.post("/create", payload, {
    headers: {
      authorization: localStorage.getItem("dev-token"),
    },
  });
};

export const getUserThreadsApi = async () => {
  return await API.get("/userThreads", {
    headers: {
      authorization: localStorage.getItem("dev-token"),
    },
  });
};
