import React from "react";
import styles from "./menu.module.css";
import "./plus.style.css"; 
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";
import { useParams } from "react-router-dom";

const Plus = () => { 
  const {id} =useParams()
  const copierLien = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Lien copié dans le presse-papier !");
    });
  };

  

    console.log(id)

  return (
    <div className={styles.contenerprojet}>
        <Menu/>

    <div className="detail-page-container"> 

      <main className="detail-page">
        <img
          src="https://picsum.photos/800/300"
          alt="Image détail"
          className="detail-image"
        />
        <div className="detail-content">
          <h2>Titre complet de la publication</h2>
          <p className="detail-date">Publié le 06 Octobre 2025</p>
          <p>
            Voici le contenu complet de la publication. Cette page permet d’afficher
            tout le texte ou les médias associés à une publication sans modal.
            Elle est responsive et adaptée aux petits écrans pour une lecture fluide.
          </p>

          {/* Boutons de partage */}
          <div className="share-buttons">
            <span>Partager :</span>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://votresite.com/details.html?id=1"
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn fb"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=https://votresite.com/details.html?id=1&text=Titre de la publication"
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn tw"
            >
              Twitter
            </a>
            <a
              href="https://wa.me/?text=https://votresite.com/details.html?id=1"
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn wa"
            >
              WhatsApp
            </a>
            <button className="share-btn copy" onClick={copierLien}>
              Copier le lien
            </button>
          </div>
        </div>
      </main>
    </div>
    <Fooler/>
    </div>
  );
};

export default Plus;
