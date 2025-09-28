// src/services/coordonneeService.js
import axios from "axios";

// Base URL de ton API
const API_URL = "http://localhost:3000/api/cordonnees";

// Fonction pour récupérer toutes les coordonnées avec pagination
export const getAllCoordonnees = async (page = 1, size = 10) => {
  try {
    const response = await axios.get(API_URL, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur getAllCoordonnees:", error);
    throw error;
  }
};

// Fonction pour récupérer une coordonnée par ID
export const getCoordonneeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur getCoordonneeById:", error);
    throw error;
  }
};

// Fonction pour créer une nouvelle coordonnée
export const createCoordonnee = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Erreur createCoordonnee:", error);
    throw error;
  }
};

// Fonction pour mettre à jour une coordonnée existante
export const updateCoordonnee = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur updateCoordonnee:", error);
    throw error;
  }
};

// Fonction pour supprimer une coordonnée par ID
export const deleteCoordonnee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur deleteCoordonnee:", error);
    throw error;
  }
};
