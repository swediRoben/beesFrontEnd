import React, { useState } from "react";
import styles from "./menu.module.css";
import { Link, useLocation } from "react-router-dom";


const Menu = () => {
 const location = useLocation();
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [activation] = useState({
      index:false,
      pub:false,
      projet:false,
      contact:false,
      apropos:false
  }); 

  const activationIndex=(e)=>{ 
      if (e===1) {
        activation.index=true;
        activation.pub=false; 
        activation.projet=false; 
        activation.contact=false; 
        activation.apropos=false;  
      }else if (e===2) {
        activation.index=false;
        activation.pub=true; 
        activation.projet=false; 
        activation.contact=false; 
        activation.apropos=false;  
      }else if (e===3) {
        activation.index=false;
        activation.pub=false; 
        activation.projet=true; 
        activation.contact=false; 
        activation.apropos=false;  
      }else if (e===4) {
        activation.index=false;
        activation.pub=false; 
        activation.projet=false; 
        activation.contact=false; 
        activation.apropos=true;  
      }else if (e===5) {
        activation.index=false;
        activation.pub=false; 
        activation.projet=false; 
        activation.contact=true; 
        activation.apropos=false;  
      }
  }
  
  const toggleMenu = () => { 
    setToggleMobileMenu(!toggleMobileMenu);
  };

  return (
    <div>
    {/* Langue */}

        <header className={styles.topbar}>
        <div className={styles.topbar__inner}>
            <a className={styles.brand} href="#" aria-label="Accueil">
                <span className={styles.brand__dot} aria-hidden="true"></span> Bureau d'études environnementale et sociales des environnements
            </a>

            <nav className={styles.langs} aria-label="Sélecteur de langue">
                <ul className={styles["lang-list"]} role="list">
                    <li className={styles["lang-item"]} ><a className={styles["lang-link"]} href="?lang=fr">🇫🇷 <strong>Français</strong></a></li>
                    <li className={styles["lang-item"]} ><a className={styles["lang-link"]} href="?lang=en">us <strong>English</strong></a></li>
                    <li className={styles["lang-item"]} ><a className={styles["lang-link"]} href="?lang=en">🇪🇸 <strong>Español</strong></a></li>
 

                     </ul>
            </nav>
        </div>
    </header> 

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles["nav-container"]}>
          <div className={styles["nav-content"]}> 

            <div className={styles["nav-logo"]}>
              <Link to="/">
                <img 
                  src="/public/beeslogo-_1_.svg" 
                  alt="Logo BEES" 
                  className={styles["logo-img"]} 
                />
              </Link>
            </div>

            <div className={`${styles["nav-links"]} ${styles.desktop}`}> 
              <Link to="/"  className={`${styles["nav-link"]}  ${location.pathname === "/" ? styles.active : ""}`} onClick={()=>activationIndex(1)}>Accueil</Link>
              <Link to="/pub" className={`${styles["nav-link"]} ${location.pathname === "/pub" ? styles.active : ""}`} onClick={()=>activationIndex(2)}>Publications</Link>
              <Link to="/projet" className={`${styles["nav-link"]} ${location.pathname === "/projet" ? styles.active : ""}`} onClick={()=>activationIndex(3)}>Projets</Link>
              <Link to="/apropos" className={`${styles["nav-link"]} ${location.pathname === "/apropos" ? styles.active : ""}`} onClick={()=>activationIndex(4)}>À Propos</Link>
              <Link to="/contact" className={`${styles["nav-link"]} ${location.pathname === "/contact" ? styles.active : ""}`} onClick={()=>activationIndex(5)}>Contact</Link>
              <button className={styles["btn-donate"]}>Faire un Don</button>
            </div>

            <button className={styles["mobile-menu-btn"]} onClick={toggleMenu}>
              <span id="menu-icon">☰</span>
            </button>
          </div>

          {toggleMobileMenu && (
            <div id="mobile-menu" className={styles["mobile-menu"]}>
              <Link to="/"  className={`${styles["nav-link"]} ${activation.index===true?styles.active:""}`} onClick={()=>activationIndex(1)}>Accueil</Link>
              <Link to="/pub" className={`${styles["nav-link"]} ${activation.pub===true?styles.active:""}`} onClick={()=>activationIndex(2)}>Publications</Link>
              <Link to="/projet" className={`${styles["nav-link"]} ${activation.projet===true?styles.active:""}`} onClick={()=>activationIndex(3)}>Projets</Link>
              <Link to="/apropos" className={`${styles["nav-link"]} ${activation.apropos===true?styles.active:""}`} onClick={()=>activationIndex(4)}>À Propos</Link>
              <Link to="/contact" className={`${styles["nav-link"]} ${activation.contact===true?styles.active:""}`} onClick={()=>activationIndex(5)}>Contact</Link>
              <button className={`${styles["btn-donate"]} ${styles.mobile}`}>Faire un Don</button>
            </div>
          )}
        </div>
      </nav>

    </div>
  );
};

export default Menu;
