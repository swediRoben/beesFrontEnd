import React from 'react';
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";
import styles from "./menu.module.css";

const Apropos = () => {
    return (
        <div className={styles.contenerprojet}> 
      <Menu/>

<section 
  className={styles["page-header"]} 
  style={{ backgroundImage: `url('/changement_climatique.jpg')` }}
>
  <div className={styles["page-header-back"]}></div>
  <div className={styles["container"]}>
    <h1>À Propos de BEES</h1>
    <p>Depuis 2022, nous œuvrons pour un monde plus juste et équitable</p>
  </div>
</section>


    <section className={ styles["our-story"]} style={{paddingRight:"1rem",paddingLeft:"1rem"}}>
        <div className={ styles["container"]}>
            <div className={ styles["story-content"]}>
                <div className={ styles["story-text"]}>
                    <h2>Historique du BEES</h2>
                    <p>Le Bureau d’Études Environnementales et Sociales (BEES) est une initiative fondée en 2022 à Uvira (Sud-Kivu) par d’anciens étudiants de l’Institut Supérieur de Développement Rural (ISDR), passionnés par le développement durable et la protection de l’environnement. Face aux effets du changement climatique et à la montée des conflits liés aux ressources naturelles en République Démocratique du Congo, ils ont créé le BEES pour offrir une expertise technique et sociale au service des communautés rurales.</p>
                    
                    <p>BEES œuvre aujourd’hui pour une gestion responsable des ressources naturelles, une planification territoriale durable, et une cohésion sociale fondée sur la participation citoyenne. Grâce à son approche alliant sciences sociales et environnementales, le bureau accompagne les acteurs locaux dans la construction d’un avenir plus équitable, écologique et résilient.</p>
                    
                
                </div>
                <div className={ styles["story-image"]}>
                    <img src="/protection-environ.jpg" alt="Équipe BEES au travail"/>
                </div>
            </div>
        </div>
    </section>
 

       <section className={ styles["values-section"]}>
        <div className={ styles["container"]}>
            <div className={ styles["section-header"]}>
                <h2>APPROCHES METHODOLOGIQUES</h2>
                {/* <p>Les principes qui guident notre action quotidienne</p> */}
            </div>
            
            <div className={ styles["values-grid"]}>
                <div className={ styles["value-card"]}>
                    <div className={ styles["value-icon compassion"]}>❤️</div>
                    <h3>Recherche-action </h3>
                    <p>Etudes et publications sur l’impact du climat et des ressources sur les communautés.</p>
                </div>
                
                <div className={ styles["value-card"]}>
                    <div className={ styles["value-icon collaboration"]}>🛡️</div>
                    <h3>Évaluation participative</h3>
                    <p>Indicateurs communautaires pour mesurer les impacts.</p>
               </div>
                
                <div className={ styles["value-card"]}>
                    <div className={ styles["value-icon integrity"]}>🤝</div>
                    <h3>Formation et coaching</h3>
                    <p>sessions pratiques pour leaders, enseignants, paysans, coopératives.</p>
              </div>
                
                <div className={ styles["value-card"]}>
                    <div className={ styles["value-icon innovation"]}>💡</div>
                    <h3>Synergies stratégiques </h3>
                    <p>Collaboration avec ONG locales, universités, services étatiques et bailleurs.</p>
                </div>
            </div>
        </div>
    </section>
 
  <section className={styles["our-domain"]} style={{paddingRight:"1rem",paddingLeft:"1rem"}}>
  <div className={styles["container"]}>
    <div className={styles["story-content"]}>
      
      <div className={styles["story-text"]}>
        <h2>Domaines Stratégiques</h2>

        <div className={styles["domain-item"]}>
          <h4>Adaptation Communautaire au Changement Climatique</h4>
          <ul>
            <li>Élaborer des plans locaux d’adaptation dans les zones vulnérables.</li>
            <li>Mettre en place des projets pilotes de solutions fondées sur la nature : reboisement des collines, protection des rivières, agroforesterie.</li>
            <li>Créer des systèmes communautaires d’alerte précoce (inondations, glissements, sécheresse).</li>
          </ul>
        </div>

        <div className={styles["domain-item"]}>
          <h4>Agriculture Durable et Sécurité Alimentaire</h4>
          <ul>
            <li>Former des coopératives agricoles aux pratiques agroécologiques.</li>
            <li>Diffuser des techniques de résilience agricole (compostage, irrigation simplifiée, semences locales adaptées au climat).</li>
            <li>Développer des projets intégrés agriculture–environnement (AVEC vertes, agroforesterie + microcrédit).</li>
          </ul>
        </div>
      </div>

      <div className={styles["story-image"]}>
        <div className={styles["domain-item"]}>
          <h4>Éducation et Plaidoyer Environnemental</h4>
          <ul>
            <li>Développer des modules éducatifs pour écoles, radios communautaires et associations.</li>
            <li>Former des leaders verts (jeunes et femmes) pour devenir ambassadeurs environnementaux dans leurs communautés.</li>
            <li>Contribuer aux campagnes nationales de plaidoyer (application du Code Minier, REDD+, lutte contre la déforestation, etc.).</li>
          </ul>
        </div>

        <div className={styles["domain-item"]}>
          <h4>Gouvernance Inclusive des Ressources Naturelles</h4>
          <ul>
            <li>Organiser des dialogues multi-acteurs (communautés, entreprises minières, autorités).</li>
            <li>Accompagner les structures locales pour mettre en place des conventions locales sur la gestion minière et forestière.</li>
            <li>Développer un mécanisme de suivi participatif de la redevabilité des entreprises extractives.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
 
    {/* <section className={ styles["team-section"]}>
        <div className={ styles["container"]}>
            <div className={ styles["section-header"]}>
                <h2>Notre Équipe de Direction</h2>
                <p>Des leaders passionnés et expérimentés</p>
            </div>
            
            <div className={ styles["team-grid"]}>
                <div className={ styles["team-member"]}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" alt="Marie Dubois"/>
                    <div className={ styles["member-info"]}>
                        <h3>Marie Dubois</h3>
                        <p className={ styles["member-role"]}>Directrice Générale</p>
                        <p className={ styles["member-bio"]}>15 ans d'expérience dans l'aide humanitaire internationale. Ancienne coordinatrice régionale chez Médecins Sans Frontières.</p>
                    </div>
                </div>
                
                <div className={ styles["team-member"]}>
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" alt="Jean-Pierre Martin"/>
                    <div className={ styles["member-info"]}>
                        <h3>Jean-Pierre Martin</h3>
                        <p className={ styles["member-role"]}>Directeur des Programmes</p>
                        <p className={ styles["member-bio"]}>Expert en développement rural avec 12 ans d'expérience en Afrique de l'Ouest. Ingénieur agronome de formation.</p>
                    </div>
                </div>
                
                <div className={ styles["team-member"]}>
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c9a69cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" alt="Aminata Touré"/>
                    <div className={ styles["member-info"]}>
                        <h3>Aminata Touré</h3>
                        <p className={ styles["member-role"]}>Coordinatrice Afrique</p>
                        <p className={ styles["member-bio"]}>Née au Sénégal, docteure en santé publique. Coordonne nos actions sur le terrain depuis 10 ans.</p>
                    </div>
                </div>
                
                <div className={ styles["team-member"]}>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" alt="Thomas Leclerc"/>
                    <div className={ styles["member-info"]}>
                        <h3>Thomas Leclerc</h3>
                        <p className={ styles["member-role"]}>Directeur Financier</p>
                        <p className={ styles["member-bio"]}>Expert-comptable spécialisé dans les organisations à but non lucratif. Assure la transparence financière depuis 8 ans.</p>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
 
    {/* <section className={ styles["certifications-section"]}>
        <div className={ styles["container"]}>
            <div className={ styles["cert-content"]}>
                <div className={ styles["certifications"]}>
                    <h3>Nos Certifications</h3>
                    <div className={ styles["cert-list"]}>
                        <div className={ styles["cert-item"]}>
                            <span className={ styles["cert-icon"]}>🏆</span>
                            <span>Certification ISO 9001:2015 (Gestion de la Qualité)</span>
                        </div>
                        <div className={ styles["cert-item"]}>
                            <span className={ styles["cert-icon"]}>🏆</span>
                            <span>Label Don en Confiance</span>
                        </div>
                        <div className={ styles["cert-item"]}>
                            <span className={ styles["cert-icon"]}>🛡️</span>
                            <span>Accréditation Comité de la Charte</span>
                        </div>
                    </div>
                </div>
                
                <div className={ styles["partners"]}>
                    <h3>Nos Partenaires</h3>
                    <div className={ styles["partners-list"]}>
                        <div className={ styles["partner-item"]}>
                            <span className={ styles["partner-icon"]}>🌍</span>
                            <span>Union Européenne</span>
                        </div>
                        <div className={ styles["partner-item"]}>
                            <span className={ styles["partner-icon"]}>🤝</span>
                            <span>UNICEF</span>
                        </div>
                        <div className={ styles["partner-item"]}>
                            <span className={ styles["partner-icon"]}>👥</span>
                            <span>Agence Française de Développement</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
 
    <section className={ styles["mission-statement"]}>
        <div className={ styles["container"]}>
            <h2>Notre VISION</h2>
            <blockquote>
                "Devenir un acteur clé en RDC dans la recherche, la formation et l’accompagnement des communautés et institutions pour une gestion durable de l’environnement, une meilleure adaptation au changement climatique et une gouvernance équitable des ressources naturelles."
            </blockquote>
            <div className={ styles["mission-goals"]}>
                <div className={ styles["goal"]}>
                    <h4>🎯 Objectif Principal</h4>
                    <p>Contribuer à la résilience des communautés face aux changements climatiques et à la gestion durable des ressources naturelles, afin de renforcer la sécurité alimentaire, la justice sociale et la protection de l’environnement.</p>
                </div>
                <div className={ styles["goal"]}>
                    <h4>🌍 Misson</h4>
                    <p>Promouvoir des solutions durables et inclusives en développant des pratiques agricoles résilientes, en renforçant l’éducation et le plaidoyer environnemental, en favorisant une gouvernance équitable des ressources naturelles et en accompagnant les communautés vulnérables dans leur adaptation au changement climatique</p>
                </div>
                <div className={ styles["goal"]}>
                    <h4>⚖️ Approche</h4>
                    <p>Notre action repose sur la participation communautaire en impliquant jeunes, femmes et acteurs locaux, sur l’innovation durable à travers des pratiques agroécologiques et des solutions fondées sur la nature, sur le partenariat et le plaidoyer avec les institutions et la société civile, ainsi que sur la transparence et la redevabilité pour une gestion équitable et responsable des ressources au bénéfice des générations présentes et futures.</p>
                </div>
            </div>
        </div>
    </section>
      <Fooler/>    
        </div>
    );
}

export default Apropos;
