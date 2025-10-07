import axios from "axios";

const API_URL = "https://beesbackend-production.up.railway.app/api/donation"; // adapte selon ton backend

// Récupérer toutes les donations avec pagination
export const getDonations = (page = 1, size = 5) => {
    const token = sessionStorage.getItem('token');
  return axios.get(`${API_URL}/?page=${page}&limit=${size}`,{
            headers: {
            Authorization: `Bearer ${token}`
        }
  });
};

// Récupérer une donation par ID
export const getDonationById = (id) => {
    const token = sessionStorage.getItem('token');
  return axios.get(`${API_URL}/${id}`,{
            headers: {
            Authorization: `Bearer ${token}`
        }
  });
};

// Créer une nouvelle donation
export const createDonation = (donationData) => {
    const token = sessionStorage.getItem('token');
  return axios.post(`${API_URL}/`, donationData,{
            headers: {
            Authorization: `Bearer ${token}`
        }
  });
};

// Mettre à jour une donation existante
export const updateDonation = (id, donationData) => {
    const token = sessionStorage.getItem('token');
  return axios.put(`${API_URL}/${id}`, donationData,{
            headers: {
            Authorization: `Bearer ${token}`
        }
  });
};

// Supprimer une donation
export const deleteDonation = (id) => {
    const token = sessionStorage.getItem('token');
  return axios.delete(`${API_URL}/${id}`,{
            headers: {
            Authorization: `Bearer ${token}`
        }
  });
};
