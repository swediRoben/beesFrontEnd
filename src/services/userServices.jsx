// src/services/authService.js
import axios from "axios";

const API_URL = "https://beesbackend-production.up.railway.app/api/auth";

// ✅ Inscription
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Erreur signup:", error);
    throw error;
  }
}; 

// ✅ Inscription
export const create = async (userData) => {
  try {
    const token = sessionStorage.getItem('token'); // ⚡ Récupérer depuis sessionStorage
    const response = await axios.post(`${API_URL}/`, userData,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
  } catch (error) {
    console.error("Erreur signup:", error);
    throw error;
  }
};

// ✅ Récupérer tous les projets avec pagination
export const getAllUsers = async () => {
  try {
    const token = sessionStorage.getItem('token'); // ⚡ Récupérer depuis sessionStorage
    const response = await axios.get(`${API_URL}/`, { 
      headers:{
        Authorization:`Bearer ${token}`
      }
    });  
    return response.data;
  } catch (error) {
    console.error("Erreur get all pub :", error);
    throw error;
  }
};

// ✅ Supprimer une publication
export const deleteUsers = async (id) => {
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

// ✅ Connexion
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    // Stocker le token dans sessionStorage
    if (response.data.token) {
      sessionStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Erreur login:", error);
    throw error;
  }
};

// ✅ Déconnexion
export const logout = () => {
  sessionStorage.removeItem("token");
};

// ✅ Récupérer le profil de l’utilisateur connecté
export const getProfile = async () => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) throw new Error("Utilisateur non authentifié");

    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur getProfile:", error);
    throw error;
  }
};

// ✅ Axios instance avec token automatiquement
export const axiosPrivate = axios.create({
  baseURL: API_URL,
});

axiosPrivate.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
