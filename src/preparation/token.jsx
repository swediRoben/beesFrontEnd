import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'; // ton backend

export const signup = async (data) => {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data;
};

export const login = async (data) => {
    const response = await axios.post(`${API_URL}/login`, data);
    if (response.data.token) {
        sessionStorage.setItem('token', response.data.token); // on stocke le token
    }
    return response.data;
};

export const getProfile = async () => {
    const token = sessionStorage.getItem('token'); // récupérer le token
    const response = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}` // passer le token
        }
    });
    return response.data;
};

export const logout = () => {
    sessionStorage.removeItem('token');
};


// avec session storege 
// export const login = async (data) => {
//     const response = await axios.post(`${API_URL}/login`, data);
//     if (response.data.token) {
//         sessionStorage.setItem('token', response.data.token); // ⚡ Ici on utilise sessionStorage
//     }
//     return response.data;
// };

// recuperer avec session storage: 
// export const getProfile = async () => {
//     const token = sessionStorage.getItem('token'); // ⚡ Récupérer depuis sessionStorage
//     const response = await axios.get(`${API_URL}/profile`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
//     return response.data;
// };

// supprimer le token a la deconnection :
// export const logout = () => {
//     sessionStorage.removeItem('token'); // ⚡ Supprime le token
// };

// dans le service :
// export const getAllContacts = async () => {
//     const token = sessionStorage.getItem('token'); // Récupération du token
//     const response = await axios.get(API_URL, {
//         headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
// };


