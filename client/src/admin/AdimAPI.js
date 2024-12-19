import axios from "axios";

const API_BASE = "https://onyeze-one-api.onrender.com/api/admin"; // Backend URL

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE}/get`);
  return response.data;
};

export const addProduct = async (formData) => {
  const response = await axios.post(`${API_BASE}/add`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const editProduct = async (id, formData) => {
  const response = await axios.put(`${API_BASE}/edit/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_BASE}/delete/${id}`);
  return response.data;
};
