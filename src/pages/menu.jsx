import React, { useEffect, useState } from "react";
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

  // On first mount, if a lang is present in URL, apply it automatically
  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const urlLang = params.get('lang');
      if (urlLang) {
        // defer to let Google script initialize
        setTimeout(() => switchLanguage(urlLang), 0);
      }
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Trigger Google Translate and update the URL query param
  const switchLanguage = (code) => {
    try {
      // 1) Update URL (?lang=code) while preserving other params
      const p = new URLSearchParams(location.search);
      p.set('lang', code);
      const qs = p.toString();
      const newUrl = `${location.pathname}${qs ? `?${qs}` : ''}`;
      window.history.replaceState({}, '', newUrl);

      // 2) Set Google Translate cookie for persistence
      const setGTCookie = (lang) => {
        const value = `/auto/${lang}`;
        const domain = window.location.hostname;
        // Set for current domain
        document.cookie = `googtrans=${value};path=/;max-age=${60 * 60 * 24 * 365}`;
        // Try with dot-domain as well
        document.cookie = `googtrans=${value};path=/;domain=.${domain};max-age=${60 * 60 * 24 * 365}`;
      };
      setGTCookie(code);

      // 3) Trigger Google Translate (retry if widget not ready yet)
      let attempts = 0;
      const applyLang = () => {
        const select = document.querySelector('select.goog-te-combo');
        if (select) {
          select.value = code;
          select.dispatchEvent(new Event('change'));
        } else if (attempts < 15) { // retry up to ~3s total
          attempts += 1;
          setTimeout(applyLang, 200);
        } else {
          console.warn('Google Translate select not found, forcing reload to apply cookie.');
          // As a last resort, reload so cookie takes effect
          window.location.reload();
        }
      };
      applyLang();
    } catch (e) {
      console.error('Erreur switchLanguage:', e);
    }
  };

  return (
    <div>
    {/* Langue */}

        <header className={styles.topbar}>
        <div className={styles.topbar__inner}>
            <a className={styles.brand} href="/" aria-label="Accueil">
                <span className={styles.brand__dot} aria-hidden="true"></span> Bureau d'études environnementales et sociales
            </a>

            <nav className={`${styles.langs} notranslate`} aria-label="Sélecteur de langue" translate="no">
                {(() => {
                  const languages = [
                    { code: 'fr', label: 'FR', flag: '🇫🇷', hreflang: 'fr' },
                    { code: 'en', label: 'EN', flag: '🇬🇧', hreflang: 'en' },
                    { code: 'es', label: 'ES', flag: '🇪🇸', hreflang: 'es' },
                    { code: 'de', label: 'DE', flag: '🇩🇪', hreflang: 'de' },
                  ];
                  const params = new URLSearchParams(location.search);
                  const currentLang = params.get('lang') || 'fr';
                  const buildHref = (code) => {
                    const p = new URLSearchParams(location.search);
                    p.set('lang', code);
                    const qs = p.toString();
                    return `${location.pathname}${qs ? `?${qs}` : ''}`;
                  };
                  return (
                    <ul className={styles["lang-list"]} role="list">
                      {languages.map((lng) => (
                        <li className={styles["lang-item"]} key={lng.code} translate="no">
                          <button
                            type="button"
                            className={styles["lang-link"]}
                            onClick={() => switchLanguage(lng.code)}
                            lang={lng.hreflang}
                            aria-current={currentLang === lng.code ? 'true' : undefined}
                            title={`${lng.label}`}
                            translate="no"
                          >
                            <span aria-hidden="true">{lng.flag}</span>
                            {' '}
                            <strong className="notranslate">{lng.label}</strong>
                          </button>
                        </li>
                      ))}
                    </ul>
                  );
                })()}
            </nav>
        </div>
    </header> 

      {/* Navigation */}
      <nav className={styles.navbar} style={{paddingRight:"1rem",paddingLeft:"1rem"}}>
        <div className={styles["nav-container"]}>
          <div className={styles["nav-content"]}> 

            <div className={styles["nav-logo"]}>
              <Link to="/">
                <img 
                  src="/beeslogo-_1_.svg" 
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
