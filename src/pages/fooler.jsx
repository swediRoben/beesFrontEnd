import React from 'react';
import styles from "./menu.module.css";

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
                <li><a href="projets.html">Nos Projets</a></li>
                <li><a href="#">Faire un Don</a></li>
                <li><a href="#">Devenir Bénévole</a></li>
                <li><a href="#">Partenariats</a></li>
                <li><a href="#">Transparence</a></li>
              </ul>
            </div>

            <div className={styles["footer-section"]}>
              <h3>Ressources</h3>
              <ul>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="#">Rapports Annuels</a></li>
                <li><a href="#">Actualités</a></li>
                <li><a href="#">Médiathèque</a></li>
                <li><a href="#">FAQ</a></li>
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
                  <span>bees@asbl.org</span>
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
