import React, { useState } from "react";
import styles from "./menu.module.css";

const Menu = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  return (
    <div>
    {/* Langue */}

        <header className={styles.topbar}>
        <div className={styles.topbar__inner}>
            <a className={styles.brand} href="#" aria-label="Accueil">
                <span className={styles.brand__dot} aria-hidden="true"></span> Protection des environnements
            </a>

            <nav className={styles.langs} aria-label="Sélecteur de langue">
                <ul className={styles["lang-list"]} role="list">
                    <li className={styles["lang-item"]} ><a className={styles["lang-link"]} href="?lang=fr">🇫🇷 Français</a></li>
                    <li className={styles["lang-item"]} ><a className={styles["lang-link"]} href="?lang=en">🇬🇧 English</a></li>
                    <li className={styles["lang-item"]} ><a className={styles["lang-link"]} href="?lang=en">🇪🇸 Español</a></li>
 

                    <li className={styles["lang-item"]}><a className={styles["lang-link"]} href="?lang=pt">🇵🇹 Português</a></li>
                </ul>
            </nav>
        </div>
    </header> 

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles["nav-container"]}>
          <div className={styles["nav-content"]}> 

            <div className={styles["nav-logo"]}>
              <a href="index.html">
                <img 
                  src="/public/beeslogo-_1_.svg" 
                  alt="Logo BEES" 
                  className={styles["logo-img"]} 
                />
              </a>
            </div>

            <div className={`${styles["nav-links"]} ${styles.desktop}`}>
              <a href="index.html" className={`${styles["nav-link"]} ${styles.active}`}>Accueil</a>
              <a href="publications.html" className={styles["nav-link"]}>Publications</a>
              <a href="projets.html" className={styles["nav-link"]}>Projets</a>
              <a href="apropos.html" className={styles["nav-link"]}>À Propos</a>
              <a href="contact.html" className={styles["nav-link"]}>Contact</a>
              <button className={styles["btn-donate"]}>Faire un Don</button>
            </div>

            <button className={styles["mobile-menu-btn"]} onClick={toggleMenu}>
              <span id="menu-icon">☰</span>
            </button>
          </div>

          {toggleMobileMenu && (
            <div id="mobile-menu" className={styles["mobile-menu"]}>
              <a href="index.html" className={styles["mobile-link"]}>Accueil</a>
              <a href="publications.html" className={styles["mobile-link"]}>Publications</a>
              <a href="projets.html" className={styles["mobile-link"]}>Projets</a>
              <a href="apropos.html" className={styles["mobile-link"]}>À Propos</a>
              <a href="contact.html" className={styles["mobile-link"]}>Contact</a>
              <button className={`${styles["btn-donate"]} ${styles.mobile}`}>Faire un Don</button>
            </div>
          )}
        </div>
      </nav>

    </div>
  );
};

export default Menu;
