import { useState, useEffect } from "react";
import { getContacts, deleteContact } from "../services/contactServices";

const ContactTable = ({ onEdit }) => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadContacts = () => {
    getContacts(page, 5).then((res) => {
      setContacts(res.data.rows);
      setTotalPages(res.data.totalPages);
    });
  };

  useEffect(() => {
    loadContacts();
  }, [page]);

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer ce contact ?")) {
      await deleteContact(id);
      loadContacts();
    }
  };

  return (
    <div>
      <h3>Liste des contacts</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Contenu</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.title}</td>
              <td>{c.content}</td>
              <td>{new Date(c.data).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onEdit(c.id)}>✏️ Modifier</button>
                <button onClick={() => handleDelete(c.id)}>🗑️ Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ⬅️ Précédent
        </button>
        <span> Page {page} / {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Suivant ➡️
        </button>
      </div>
    </div>
  );
};

export default ContactTable;
