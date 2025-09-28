// import axios from 'axios';

// const API_URL = 'http://localhost:3000/api/contact';

// export const getAllContacts = async () => {
//     const token = localStorage.getItem('token'); // récupérer le token
//     const response = await axios.get(API_URL, {
//         headers: {
//             Authorization: `Bearer ${token}` // passer le token pour authentification
//         }
//     });
//     return response.data;
// };

// export const createContact = async (data) => {
//     const token = localStorage.getItem('token');
//     const response = await axios.post(API_URL, data, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
//     return response.data;
// };


// import axios from 'axios';

// const API_URL = 'http://localhost:3000/api/publications';

// export const getAllPublications = async () => {
//     const token = localStorage.getItem('token');
//     const response = await axios.get(API_URL, {
//         headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
// };

// export const createPublication = async (data) => {
//     const token = localStorage.getItem('token');
//     const response = await axios.post(API_URL, data, {
//         headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
// };
