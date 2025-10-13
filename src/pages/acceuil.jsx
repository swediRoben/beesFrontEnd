import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";
import {getAllProjets} from "../services/projectServices.jsx"
import { Link } from "react-router-dom";
const Acceuil = () => { 
    const [datas, setDatas] = useState({data:[]}); 
   const dataPublication =async (page,size)=>{ 
        const data=await getAllProjets(null,page,size);  
        setDatas(data) 
      }

 useEffect(() => {
          dataPublication(1,3) 
          }, []);

    const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", { 
    month: "long",
    year: "numeric"
  });
};
  return (
    <div className={styles.body}> 
      <Menu/>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.herooverlay}></div>
        <div
          className={styles.herobg}
          style={{
            backgroundImage: `url('/IMG_0451.png')`
          }}
        ></div>

        <div className={styles.herocontent}>
          <h1>Agir aujourd’hui, protéger demain</h1>
          <p>
           Organisation BEES la résilience et le développement durable des communautés vulnérables à travers l’adaptation au changement climatique, l’agriculture durable, l’éducation et la gouvernance responsable des ressources naturelles.
            </p>
          <div className={styles.herobuttons}>
            <button className={`${styles.btn} ${styles.primary}`}>Agir Maintenant</button>
            <button className={`${styles.btn} ${styles.secondary}`}>Découvrir Nos Actions</button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles["section-header"]}>
            <h2>Notre Vision</h2>
            <p>
             Devenir un acteur clé en RDC dans la recherche, la formation et l’accompagnement des communautés et
              institutions pour une gestion durable de l’environnement,
              une meilleure adaptation au changement climatique et une gouvernance équitable des ressources
               naturelles.
            </p>
          </div>

          <div className={styles["mission-cards"]}>
            <div className={styles.card}>
              <div className={`${styles["card-icon"]} ${styles.education}`}>🎓</div>
              <h3>Éducation</h3>
              <p>
                Former des leaders verts (jeunes et femmes)
                 pour devenir ambassadeurs environnementaux dans leurs communautés.
              </p>
            </div>

            <div className={styles.card}>
              <div className={`${styles["card-icon"]} ${styles.health}`}>🛡️</div>
              <h3>Securité</h3>
              <p>
                Mettre en place des projets pilotes de solutions fondées sur la nature :
                 reboisement des collines, protection des rivières, agroforesterie
              </p>
            </div>

            <div className={styles.card}>
              <div className={`${styles["card-icon"]} ${styles.environment}`}>🌿</div>
              <h3>Environnement</h3>
              <p>
                Développer des projets intégrés agriculture–environnement (AVEC vertes, agroforesterie + microcrédit).
              </p>
            </div>
          </div>
        </div>
      </section> */}

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

      {/* Impact Numbers */}
      <section className={styles.impact}>
        <div className={styles.container}>
          <div className={styles["section-header"]}>
            <h2>Notre Impact en Chiffres</h2>
          </div>

          <div className={styles["impact-stats"]}>
            <div className={styles.stat}>
              <div className={styles["stat-number"]}>0+</div>
              <p>Bénéficiaires Aidés</p>
            </div>
            <div className={styles.stat}>
              <div className={styles["stat-number"]}>0</div>
              <p>Projets Réalisés</p>
            </div>
            <div className={styles.stat}>
              <div className={styles["stat-number"]}>RDC</div>
              <p>Pays d'Intervention</p>
            </div>
            <div className={styles.stat}>
              <div className={styles["stat-number"]}>0+</div>
              <p>Volontaires Actifs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles["featured-projects"]}>
        <div className={styles.container}>
          <div className={styles["section-header"]}>
            <h2>Nos Projets</h2>
            <p>Découvrez quelques-uns de nos projets qui transforment des vies</p>
          </div>

              <div className={styles["publications-grid"]} id={styles["publications-grid"]}>
     
                {datas.data?.map((element) => (
                    
                     <div className={styles["publication-card"]} data-category="report">
                      {element.typeFichier === "IMAGES" && (
                       <img
                         src={element.fichier}
                         alt={element.title}
                         
                       />
                     )}
     
                     {element.typeFichier === "VIDEO" && (
     
                       <iframe  
                        src={element.fichier}
                        title={element.title}
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                       allowfullscreen>
                     
                        </iframe> 
                        
                     )} 
                        
                         <div className={styles["publication-content"]}>
                   
                           <div className={ styles["publication-meta"]}>
                                 <span className={`${styles["category-badge"]} ${styles.testimonial}`}>{element.secteur}</span>
                                 <span className={`${styles["category-badge"]} ${styles.news}`} >{element.status}</span>
                             </div>
                             <h3>{element.title}</h3>
                             <p>{element.contenu.slice(0,120)} ...</p>
     
                             
                             <div className={ styles["project-stats"]}>
                                 <div className={ styles["stat-item"]}>
                                     <span className={ styles["stat-icon"]}>👥</span>
                                     <div>
                                         <div className={ styles["stat-number"]}>{element.beneficier}</div>
                                         <div className={ styles["stat-label"]}>Bénéficiaires</div>
                                     </div> <br />
                                     <span className={ styles["stat-icon"]}>💰</span>
                                     <div>
                                         <div className={ styles["stat-number"]}>{element.budget} {element.devise}</div>
                                         <div className={ styles["stat-label"]}>Budget</div>
                                     </div>
                                 </div>
                                 <div className={ styles["stat-item"]}>
                                     <span className={ styles["stat-icon"]}>📅</span>
                                     <div>
                                         <div className={ styles["stat-number"]}>{formatDate(element.debut)} à {formatDate(element.fin)}</div>
                                         <div className={ styles["stat-label"]}>Année</div>
                                     </div>
                                 </div>
                             </div>
     
                             <div className={ styles["progress-section"]}>
                                 <div className={ styles["progress-header"]}>
                                     <span>Avancement</span>
                                     <span className={ styles["progress-percentage"]}>{element.avencement}%</span>
                                 </div>
                                 <div className={ styles["progress-bar"]}>
                                     <div className={ styles["progress-fill"]} style={{width: `${element.avencement}`+"%"}}></div>
                                 </div>
                             </div>
                             <br />
                             <div className={styles["publication-footer"]}>
                                  {element.typeFichier === "PDF"? ( 
                                 <a href={element.fichier}  className={styles["link-arrow"]}>Télécharger →</a>
                                     ): ( 
                                   <Link to="/plus" state={{ data: element }}  className={styles["link-arrow"]}>Voir plus →</Link>
                                )} 
                             </div>
                         </div>
                     </div>
                            ))}
                      
                 </div>
      <Link to="/projet"  className={styles["link-voir-tous"]}>Voir tous nos projet →</Link>
        </div>
      </section>

      {/* Call to action */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Rejoignez Notre Vision</h2>
          <p>
             Devenir un acteur clé en RDC dans la recherche, la formation et l’accompagnement des communautés et
              institutions pour une gestion durable de l’environnement,
              une meilleure adaptation au changement climatique et une gouvernance équitable des ressources
               naturelles.
            </p>
          {/* <p>
            Ensemble, nous pouvons créer un changement positif et durable. Votre
            soutien fait la différence.
          </p> */}
          <div className={styles["cta-buttons"]} style={{paddingBottom:"1rem"}}>
            <button className={`${styles.btn} ${styles.white}`}>Devenir Bénévole</button>
            <button className={`${styles.btn} ${styles["outline-white"]}`}>Faire un Don</button>
          </div>
        </div>
      </section>

    <Fooler/>
    </div>
  );
};

export default Acceuil;
