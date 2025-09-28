// import React, { useEffect, useState } from "react";
// import {
//   getAllCoordonnees,
//   createCoordonnee,
//   updateCoordonnee,
//   deleteCoordonnee,
// } from "../services/cordonneeServices";

// const CoordonneePage = () => {
//   const [coordonnees, setCoordonnees] = useState([]);
//   const [page, setPage] = useState(1);
//   const [size, setSize] = useState(10);

//   useEffect(() => {
//     fetchData();
//   }, [page, size]);

//   const fetchData = async () => {
//     try {
//       const data = await getAllCoordonnees(page, size);
//       setCoordonnees(data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     await deleteCoordonnee(id);
//     fetchData(); // rafraîchir la liste
//   };

//   return (
//     <div>
//       <h2>Liste des Coordonnées</h2>
//       <ul>
//         {coordonnees.map((c) => (
//           <li key={c.id}>
//             {c.title} - {c.content}{" "}
//             <button onClick={() => handleDelete(c.id)}>Supprimer</button>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <button onClick={() => setPage(page - 1)} disabled={page === 1}>
//         Précédent
//       </button>
//       <span>Page {page}</span>
//       <button onClick={() => setPage(page + 1)}>Suivant</button>
//     </div>
//   );
// };

// export default CoordonneePage;
