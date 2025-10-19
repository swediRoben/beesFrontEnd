import React from 'react';
import styles from "./menu.module.css";
import { Link } from "react-router-dom";

const Fooler = () => {
    return (
        <>
              {/* Footer */}
      <footer className={styles.footer} style={{paddingRight:"1rem",paddingLeft:"1rem"}}>
        <div className={styles.container}>
          <div className={styles["footer-content"]}>
            <div className={styles["footer-section"]}>
            <div className={styles["nav-logo"]}>
              <a href="index.html">
                <img 
                  src="/beeslogo-_1_.svg" 
                  alt="Logo BEES" 
                  className={styles["logo-img"]} 
                />
              </a>
            </div>
              <p>
               🌍 « Ensemble, cultivons la résilience et la prospérité durable » <br />
                🌱 « Pour des communautés fortes, un environnement préservé »
              </p>
              <div className={styles["social-links"]}>
                <a href="#" className={styles["social-link"]}>📘</a>
                <a href="#" className={styles["social-link"]}>🐦</a>
                <a href="#" className={styles["social-link"]}>💼</a>
                <a href="#" className={styles["social-link"]}>📷</a>
              </div>
            </div>

            <div className={styles["footer-section"]}>
              <h3>Liens Rapides</h3>
              <ul>
                <li><Link to="/projet">Nos Projets</Link></li>
                <li><Link to="/contact">Faire un Don</Link></li>
                <li><Link to="/contact">Devenir Bénévole</Link></li>
                <li><Link to="/contact">Partenariats</Link></li>
                <li><Link to="/contact">Transparence</Link></li>
              </ul>
            </div>

            <div className={styles["footer-section"]}>
              <h3>Ressources</h3>
              <ul>
                <li><Link to="/pub">Publications</Link></li>
                <li><Link to="/pub">Rapports Annuels</Link></li>
                <li><Link to="/pub">Actualités</Link></li>
                <li><Link to="/pub">Médiathèque</Link></li>
                <li><Link to="/apropos">FAQ</Link></li>
              </ul>
            </div>

            <div className={styles["footer-section"]}>
              <h3>Contact</h3>
              <div className={styles["contact-info"]}>
                <div className={styles["contact-item"]}>
                  <span className={styles["contact-icon"]}>📍</span>
                   
                  <span>
                   123 Avenue plage d'or
                    <br />
                    Uvira, Commune de Kalundu
                  </span>
                </div>
                <div className={styles["contact-item"]}>
                  <span className={styles["contact-icon"]}>📞</span>
                  <span>+243 23 45 67 89</span>
                </div>
                <div className={styles["contact-item"]}>
                  <span className={styles["contact-icon"]}>✉️</span>
                  <span>direction@beesasbl.org</span>
                </div>
              </div>
            </div>
          </div>

          <hr className={styles["footer-divider"]} />

          <div className={styles["footer-bottom"]}>
            <p>© 2026 BEES. Tous droits réservés.</p>
            <div className={styles["footer-links"]}>
              <a href="#">Mentions Légales</a>
              <a href="#">Politique de Confidentialité</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
        </>
    );
}

export default Fooler;
