import axios from "axios";

const API_URL = "https://reqres.in/api";

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const fetchUsers = async (page) => {
  return await axios.get(`${API_URL}/users?page=${page}`);
};

export const fetchUserById = async (id) => {
  return await axios.get(`${API_URL}/users/${id}`);
};

export const updateUser = async (id, userData) => {
  return await axios.put(`${API_URL}/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/users/${id}`);
};
