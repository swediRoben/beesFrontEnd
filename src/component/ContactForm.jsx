import { useState, useEffect } from "react";
import { createContact, updateContact, getContactById } from "../services/contactServices";

const ContactForm = ({ selectedId, onSuccess, onCancel }) => {
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    if (selectedId) {
      getContactById(selectedId).then((res) => setForm(res.data));
    }
  }, [selectedId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedId) {
        await updateContact(selectedId, form);
      } else {
        await createContact(form);
      }
      onSuccess();
    } catch (err) {
      console.error("Erreur:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>{selectedId ? "Modifier un contact" : "Créer un contact"}</h3>
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={form.title}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="content"
        placeholder="Contenu"
        value={form.content}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">{selectedId ? "Mettre à jour" : "Créer"}</button>
      {selectedId && <button onClick={onCancel}>Annuler</button>}
    </form>
  );
};

export default ContactForm;
