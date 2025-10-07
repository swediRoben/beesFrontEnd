import React from 'react';
import styles from "./menu.module.css";
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"; 
import {createContact} from "../services/contactServices.jsx"

const Contact = () => {
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors: errors },
      } = useForm();
 
  const onSubmitContact = async (data) => {
          try { 
             await createContact(data); 
             toast.success("Message envoyé avec succès !" );
             reset();  
          } catch (error) {
             errors;
             error;
            toast.error("Erreur lors de l'envoi, Veuillez vérifier vos informations et réessayer.",{style:{backgroundColor:"red",color:"white"}}); 
          }
        };

    return (
        <>
      <Menu/> 

    <section className={styles["page-header"]} style={{backgroundImage:` url('/fondEcran.svg')`}}>
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

                        <form id="contact-form" className={styles["contact-form"]} onSubmit={handleSubmit(onSubmitContact)}>
                            <div className={styles["form-row"]}>
                                <div className={styles["form-group"]}>
                                    <label htmlFor="name">Nom complet *</label>
                                    <input  {...register("nom", { required: true })}  type="text" id="name"/>
                                    <span className={styles["error-text"]} id="name-error"></span>
                                </div>

                                <div className={styles["form-group"]}>
                                    <label htmlFor="email">Adresse email *</label>
                                    <input type="email"  {...register("email", { required: true })}  id="email"/>
                                    <span className={styles["error-text"]} id="email-error"></span>
                                </div>
                            </div>

                            <div className={styles["form-group"]}>
                                <label htmlFor="subject">Sujet *</label>
                                <select  {...register("subject", { required: true })} id="subject" >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="DEMENDE_GENERALE">Demande générale</option>
                                    <option value="DEVENIR_BENEVOLE">Devenir bénévole</option>
                                    <option value="PARTENARIAT">Partenariat</option>
                                    <option value="DON_ET_FINANCEMENT">Don et financement</option>
                                    <option value="DEMENDE_DE_PRESE">Demande presse</option>
                                    <option value="AUTRES">Autre</option>
                                </select>
                                <span className={styles["error-text"]} id="subject-error"></span>
                            </div>

                            <div className={styles["form-group"]}>
                                <label htmlFor="message" >Message *</label>
                                <textarea  {...register("message", { required: true })} id="message" rows="5" placeholder="Décrivez votre demande..." ></textarea>
                                <span className={styles["error-text"]} id="message-error"></span>
                            </div>

                            <div className={`${styles["form-group"]} ${styles["checkbox-group"]} `} >
                                <div className={styles["checkbox-label"]}>
                                    <input type="checkbox" {...register("condition",{required:false})} value={true}  />
                                    <span className={styles["checkmark"]}></span>
                                    J'accepte que mes données soient traitées conformément à la 
                                    <a href="#" className={styles["link"]}>politique de confidentialité</a> *
                                </div>
                                <span className={styles["error-text"]} id="privacy-error"></span>
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
                    <h3>Siège Social Uvira</h3>
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
