import React from "react";
import styles from "./menu.module.css";
import "./plus.style.css"; 
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";
import { useLocation } from "react-router-dom"; 

const Plus = () => { 
  const location = useLocation();
  const { data } = location.state || {};
  const copierLien = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Lien copié dans le presse-papier !");
    });
  };

  

    console.log(data)

  return (
      <div className={styles.contenerprojet}>
        <Menu/>

    <div className="detail-page-container"> 
       {data && (
      <main className="detail-page">
        
            {data.typeFichier === "IMAGES" && (
                  <img
                    src={data.fichier}
                    alt={data.title}
                   className="detail-image" 
                  />
                )}

                {data.typeFichier === "VIDEO" && (

                  <iframe  
                   src={data.fichier}
                   title={data.title}
                   frameborder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                className="detail-image" 
               allowfullscreen>
                
                   </iframe> 
                   
                )}
        <div className="detail-content">
          <h2>{data.title}</h2>
          <p className="detail-date">{data.date===undefined ?`Debut ${data.debut.slice(0,10)} - Fin ${data.fin.slice(0,10)}`:`Publié le ${data.date.slice(0,10)}`}</p>
          <p className="voir-plus-text">
            {data.contenu}
          </p>

          {/* Boutons de partage */}
          <div className="share-buttons">
            <span>Partager :</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn fb"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn tw"
            >
              Twitter
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
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
      )}
    </div>
    <section 
  className={styles["page-header"]} 
  > </section>
    <Fooler/>
    </div>
  );
};

export default Plus;
