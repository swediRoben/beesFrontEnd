// src/services/publicationService.js
import axios from "axios";

const API_URL = "https://beesbackend-production.up.railway.app/api/publications";
 

// ✅ Récupérer tous les projets avec pagination
export const getAllPublications = async (type=null,page = 1, size = 10) => {
  try {
    const response = await axios.get(`${API_URL}/`, {
      params: { type, page, size },
    });  
    return response.data;
  } catch (error) {
    console.error("Erreur get all pub :", error);
    throw error;
  }
};


// ✅ Récupérer une publication par ID
export const getPublicationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur getPublicationById:", error);
    throw error;
  }
};

// ✅ Créer une nouvelle publication
export const createPublication = async (data) => {
  try {
    const token = sessionStorage.getItem('token'); // ⚡ Récupérer depuis sessionStorage
    const response = await axios.post(API_URL, data,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    return response.data;
  } catch (error) {
    console.error("Erreur createPublication:", error);
    throw error;
  }
};

// ✅ Mettre à jour une publication
export const updatePublication = async (id, data) => {
  console.log("data",data);
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.put(`${API_URL}/${id}`, data,{
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":"multipart/form-data"
        }
    });
    return response.data;
  } catch (error) {
    console.error("Erreur updatePublication:", error);
    throw error;
  }
};

// ✅ Supprimer une publication
export const deletePublication = async (id) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
  } catch (error) {
    console.error("Erreur deletePublication:", error);
    throw error;
  }
};
