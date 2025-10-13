import React from "react";
// import styles from "./menu.module.css";
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


    // Extract YouTube video ID from various URL formats
    const extractYouTubeId = (url) => {
      if (!url) return null;
      try {
        const u = new URL(url);
        if (u.hostname.includes('youtu.be')) {
          // https://youtu.be/VIDEO_ID
          return u.pathname.replace('/', '').split('?')[0];
        }
        if (u.hostname.includes('youtube.com')) {
          // https://www.youtube.com/watch?v=VIDEO_ID
          if (u.searchParams.get('v')) return u.searchParams.get('v');
          // https://www.youtube.com/embed/VIDEO_ID or /shorts/VIDEO_ID
          const parts = u.pathname.split('/').filter(Boolean);
          const idx = parts.findIndex(p => p === 'embed' || p === 'shorts' || p === 'v');
          if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
        }
      } catch (_) {
        // Not a valid URL, maybe a raw ID passed already
        if (typeof url === 'string' && url.length >= 10 && url.length <= 64) return url;
      }
      return null;
    };
  

  return (
      <div >
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


          {data.typeFichier === "VIDEO" && (() => {
                  const yid = extractYouTubeId(data.fichier);
                  const src = yid ? `https://www.youtube.com/embed/${yid}` : data.fichier;
                  return (
                    <iframe
                      src={src}
                      title={data.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="detail-image" 
                      allowFullScreen
                    />
                  );
                })()} 
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
    <Fooler/>
    </div>
  );
};

export default Plus;
