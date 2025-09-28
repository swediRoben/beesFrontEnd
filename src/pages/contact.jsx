import React from 'react';
import styles from "./menu.module.css";
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";

const Contact = () => {
    return (
        <>
      <Menu/> 

    <section className={styles["page-header"]} style={{backgroundImage:` url('/public/fondEcran.svg')`}}>
              <div className={styles["page-header-back"]}></div> 
            <div className={styles["container"]}>
                <h1>Contactez-Nous</h1>
                <p>Nous sommes là pour répondre à vos questions</p>
            </div>
        </section>
 
    <section className={styles["contact-content"]}>
        <div className={styles["container"]}>
            <div className={styles["contact-layout"]}>
                
                <div className={styles["contact-info-section"]}>
                    <h2>Nos Coordonnées</h2>
                    
                    <div className={styles["contact-cards"]}>
                        <div className={styles["contact-info-card"]}>
                            <div className={`${styles["contact-icon-wrapper"]} ${styles.address}`}>
                                <span className={styles["contact-icon"]}>📍</span>
                            </div>
                            <div className={styles["contact-details"]}>
                                <h3>Siège Social</h3>
                                <p>123 Avenue plage d'or<br/>Uvira, Commune de Kalundu</p>
                            </div>
                        </div>

                        <div className={styles["contact-info-card"]}>
                            <div className={`${styles["contact-icon-wrapper"]} ${styles.phone}`}>
                                <span className={styles["contact-icon"]}>📞</span>
                            </div>
                            <div className={styles["contact-details"]}>
                                <h3>Téléphone</h3>
                                <p>+243 23 45 67 89</p>
                            </div>
                        </div>

                        <div className={styles["contact-info-card"]}>
                            <div className={`${styles["contact-icon-wrapper"]} ${styles.email}`}>
                                <span className={styles["contact-icon"]}>✉️</span>
                            </div>
                            <div className={styles["contact-details"]}>
                                <h3>Email</h3>
                                <p>bees@asbl.org</p>
                            </div>
                        </div>

                        <div className={styles["contact-info-card"]}>
                            <div className={`${styles["contact-icon-wrapper"]} ${styles.hours}`}>
                                <span className={styles["contact-icon"]}>🕒</span>
                            </div>
                            <div className={styles["contact-details"]}>
                                <h3>Horaires</h3>
                                <p>Lun-Ven: 9h00 - 18h00<br/>Sam: 9h00 - 12h00</p>
                            </div>
                        </div>
                    </div>
 
                    {/* <div className={styles["regional-offices"]}>
                        <h3>Nos Bureaux Régionaux</h3>
                        <div className={styles["office-item"]}>
                            <h4>Bureau Afrique de l'Ouest</h4>
                            <p>Dakar, Sénégal • +221 77 123 45 67</p>
                        </div>
                        <div className={styles["office-item"]}>
                            <h4>Bureau Sahel</h4>
                            <p>Ouagadougou, Burkina Faso • +226 70 12 34 56</p>
                        </div>
                    </div> */}
                </div>
 
                <div className={styles["contact-form-section"]}>
                    <div className={styles["form-container"]}>
                        <h2>Envoyez-nous un Message</h2>
                         
                        <div id="success-message" className={`${styles["alert"]} ${styles.success} ${styles.hidden}`} >
                            <span className={styles["alert-icon"]}>✅</span>
                            <div>
                                <strong>Message envoyé avec succès !</strong>
                                <p>Nous vous répondrons dans les plus brefs délais.</p>
                            </div>
                        </div>

                        <div id="error-message" className={`${styles["alert"]} ${styles.error} ${styles.hidden}`} >
                            <span className={styles["alert-icon"]}>❌</span>
                            <div>
                                <strong>Erreur lors de l'envoi</strong>
                                <p>Veuillez vérifier vos informations et réessayer.</p>
                            </div>
                        </div>

                        <form id="contact-form" className={styles["contact-form"]}>
                            <div className={styles["form-row"]}>
                                <div className={styles["form-group"]}>
                                    <label for="name">Nom complet *</label>
                                    <input type="text" id="name" name="name" required/>
                                    <span className={styles["error-text"]} id="name-error"></span>
                                </div>

                                <div className={styles["form-group"]}>
                                    <label for="email">Adresse email *</label>
                                    <input type="email" id="email" name="email" required/>
                                    <span className={styles["error-text"]} id="email-error"></span>
                                </div>
                            </div>

                            <div className={styles["form-group"]}>
                                <label for="subject">Sujet *</label>
                                <select id="subject" name="subject" required>
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="general">Demande générale</option>
                                    <option value="volunteer">Devenir bénévole</option>
                                    <option value="partnership">Partenariat</option>
                                    <option value="donation">Don et financement</option>
                                    <option value="press">Demande presse</option>
                                    <option value="other">Autre</option>
                                </select>
                                <span className={styles["error-text"]} id="subject-error"></span>
                            </div>

                            <div className={styles["form-group"]}>
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" rows="5" placeholder="Décrivez votre demande..." required></textarea>
                                <span className={styles["error-text"]} id="message-error"></span>
                            </div>

                            <div className={`${styles["form-group"]} ${styles["checkbox-group"]} `} >
                                <label className={styles["checkbox-label"]}>
                                    <input type="checkbox" id="privacy" name="privacy" required/>
                                    <span className={styles["checkmark"]}></span>
                                    J'accepte que mes données soient traitées conformément à la 
                                    <a href="#" className={styles["link"]}>politique de confidentialité</a> *
                                </label>
                                <span className={styles["error-text"]} id="privacy-error"></span>
                            </div>

                            <div className={`${styles["form-group"]} ${styles["checkbox-group"]} `} >
                                <label className={styles["checkbox-label"]}>
                                    <input type="checkbox" id="newsletter" name="newsletter"/>
                                    <span className={styles["checkmark"]}></span>
                                    Je souhaite recevoir la newsletter de BEES
                                </label>
                            </div>

                            <button  className={`${styles.btn}  ${styles.primary} ${styles["form-submit"]} `} type="submit" >
                                <span className={styles["btn-text"]}>Envoyer le Message</span>
                                <span className={styles["btn-loading", "hidden"]}>Envoi en cours...</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className={styles["map-section"]}>
        <div className={styles["container"]}>
            <h2>Nous Localiser</h2>
            <div className={styles["map-placeholder"]}>
                <div className={styles["map-content"]}>
                    <div className={styles["map-icon"]}>🗺️</div>
                    <h3>Siège Social Uvirq</h3>
                    <p>123 Avenue plage d'or<br/>Uvira, Commune de Kalundu</p>
                    <p className={styles["map-note"]}>RDC / SUD KIVU </p>
                </div>
            </div>
        </div>
    </section> 

    <section className={styles["faq-section"]}>
        <div className={styles["container"]}>
            <div className={styles["section-header"]}>
                <h2>Questions Fréquentes</h2>
            </div>
            
            <div className={styles["faq-grid"]}>
                <div className={styles["faq-item"]}>
                    <h3>Comment puis-je faire un don ?</h3>
                    <p>Vous pouvez faire un don en ligne sécurisé via notre plateforme de donation ou par virement bancaire. Tous les dons sont déductibles des impôts.</p>
                </div>
                
                <div className={styles["faq-item"]}>
                    <h3>Comment devenir bénévole ?</h3>
                    <p>Contactez-nous via le formulaire en sélectionnant "Devenir bénévole". Nous organisons des sessions d'orientation chaque mois.</p>
                </div>
                
                <div className={styles["faq-item"]}>
                    <h3>Vos projets sont-ils transparents ?</h3>
                    <p>Oui, nous publions des rapports détaillés sur l'utilisation des fonds et l'avancement de nos projets. Consultez notre section Publications.</p>
                </div>
                
                <div className={styles["faq-item"]}>
                    <h3>Dans quels pays intervenez-vous ?</h3>
                    <p>Nous sommes présents dans 25 pays d'Afrique de l'Ouest, avec des bureaux régionaux au Sénégal et au Burkina Faso.</p>
                </div>
            </div>
        </div>
    </section>
      <Fooler/>    

        </>
    );
}

export default Contact;
