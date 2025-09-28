import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";
import {getAllProjets} from "../services/projectServices.jsx"

const Projet = () => {
        const [datas, setDatas] = useState({data:[]});
    const [page,setPage]=useState(1);  
   const dataProject =async (page,size)=>{ 
        const data=await getAllProjets(page,size);   
        setDatas(data) 
      } 

    const addPage=(val)=>{ 
        dataProject(val,6)
        setPage(val);
    } 
    useEffect(() => {
    dataProject(page,6) 
    },[page]);

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", { 
    month: "long",
    year: "numeric"
  });
};


  return (
    <div className={styles.contenerprojet}> 
      <Menu/>

         <section className={styles["filter-section"]}>
              <div className={`${styles.container}`}>
                  <div className={styles["filter-buttons"]}>
                      <button className={`${styles["filter-btn"]} ${styles.active}`} onclick="filterPublications('all')">Tous les Projets</button>
                      <button className={styles["filter-btn"]} onclick="filterPublications('education')">Éducation</button>
                      <button className={styles["filter-btn"]} onclick="filterPublications('health')">Santé</button>
                      <button className={styles["filter-btn"]} onclick="filterPublications('study')">Études</button>
                      <button className={styles["filter-btn"]} onclick="filterPublications('environment')">Environnement</button> 
                  </div>
              </div>
          </section>  
  

    <section className={styles["page-header"]} style={{backgroundImage:` url('/public/fondEcran.svg')`}}>
          <div className={styles["page-header-back"]}></div> 
        <div className={styles["container"]}>
            <h1>Publications & Actualités</h1>
            <p>Restez informés de nos dernières actions et découvertes</p>
        </div>
    </section>

 

  
    <section className={styles["publications-section"]}>
        <div className={`${styles.container}`}>
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

                        <div className={styles["publication-footer"]}>
                             {element.typeFichier === "PDF"? ( 
                            <a href={element.fichier}  className={styles["link-arrow"]}>Télécharger →</a>
                                ): ( 
                            <a href={element.id}  className={styles["link-arrow"]}>Voir plus →</a>
                                )} 
                        </div>
                    </div>
                </div>
                       ))}

                 
            </div>
         </div>
      </section>
         
             
            <div className={styles["load-more-section"]}>
                <button className={`${styles["btn"]} ${styles.primary}`} onClick={()=>addPage(page+1)} title="page">Charger Plus d'Articles</button>
            </div>  
 
      <Fooler/>    
        </div>
    );
}

export default Projet;
