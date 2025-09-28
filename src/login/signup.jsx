import React from "react";
import { useForm } from "react-hook-form";
import { signup } from "../services/userServices";
import "./signup.css"
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const singunToLog = async (data) => {
    try {
      await signup(data);
      toast.success("Inscription réussie ! Vous pouvez maintenant vous connecter."); 
      navigate("/admLogin");
    } catch (err) {
      navigate("/admLogin");
      toast.error(err.response?.data?.message || "Erreur lors de l'inscription.");
    
    }
  };

  return (
    <div className="signup-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit(singunToLog)} noValidate>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          id="username"
          type="text"
          placeholder="Nom d'utilisateur"
          {...register("username", { required: "Le nom d'utilisateur est requis" })}
          className={errors.username ? "error" : ""}
        />
        {errors.username && <p className="error-message">{errors.username.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "L'email est requis",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Format d'email invalide",
            },
          })}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          placeholder="Mot de passe"
          {...register("password", {
            required: "Le mot de passe est requis",
            minLength: {
              value: 6,
              message: "Le mot de passe doit contenir au moins 6 caractères",
            },
          })}
          className={errors.password ? "error" : ""}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Inscription..." : "S'inscrire"}
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
