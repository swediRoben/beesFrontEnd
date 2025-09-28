import axios from "axios";

const API_URL = "http://localhost:3000/api/contact"; // adapte selon ton backend

// Récupérer tous avec pagination
export const getContacts = (page = 1, limit = 5) => {
  return axios.get(`${API_URL}?page=${page}&limit=${limit}`);
};

// Récupérer par ID
export const getContactById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Créer un contact
export const createContact = (contact) => {
  return axios.post(API_URL, contact);
};

// Mettre à jour un contact
export const updateContact = (id, contact) => {
  return axios.put(`${API_URL}/${id}`, contact);
};

// Supprimer un contact
export const deleteContact = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
