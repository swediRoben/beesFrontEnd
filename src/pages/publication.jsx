import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx";
import {getAllPublications} from "../services/publicationServices" 

const Publication = () => {  
    const [datas, setDatas] = useState({data:[]});
    const [page,setPage]=useState(1); 
        const [type,setType]=useState(null);   
   const dataPublication =async (page,size)=>{ 
        const data=await getAllPublications(null,page,size);  
        setDatas(data) 
      } 

  const addPage=(val)=>{ 
        fecthDataBy(type,val,6)
        setPage(val);
    } 

    const fecthDataBy=async (type,page,size)=>{
        setType(type)
        if (type!==null) {
        const data=await getAllPublications(type,page,size);   
        setDatas(data)
        }else{
        const data=await getAllPublications(null,page,size);   
        setDatas(data)   
        }
         
    }
 
     useEffect(() => {
    dataPublication(page,6) 
    },[page]);
  return (
    <div className={styles.contenerprojet}> 
      <Menu/>

   <section className={styles["filter-section"]}>
        <div className={`${styles.container}`}>
            <div className={styles["filter-buttons"]}>
                <button className={`${styles["filter-btn"]} ${styles.active}`} onClick={()=>fecthDataBy(null,1,6)}>Tous</button>
                <button className={styles["filter-btn"]} onClick={()=>fecthDataBy("RAPPORTS",1,6)}>Rapports</button>
                <button className={styles["filter-btn"]} onClick={()=>fecthDataBy("ACTUALITES",1,6)}>Actualités</button> 
                <button className={styles["filter-btn"]} onClick={()=>fecthDataBy("NEWSLETTER",1,6)}>Newsletter</button>
                <button className={styles["filter-btn"]} onClick={()=>fecthDataBy("TEMOIGNAGE",1,6)}>Témoignages</button>
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
                        <div className={styles["publication-meta"]}>
                            <span className={`${styles["category-badge"]} ${styles.report}`}>{element.type}</span>
                            <span className={styles["date"]}>{element.date.slice(0,10)}</span>
                        </div>
                        <h3>{element.title}</h3>
                        <p>{element.contenu.slice(0,200)} ...</p>
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
                           { page>1?(
                            <div style={{
                                display:"flex",
                                gap:4,
                                justifyContent:"center"
                            }}>
                            <button className={`${styles["btn"]} ${styles.secondary}`} onClick={()=>addPage(page-1)} title="page">Retour...</button>
                             <button className={`${styles["btn"]} ${styles.secondary}`} onClick={()=>addPage(page+1)} title="page">Charger plus...</button>
            
                            </div>
                           ):
                             <button className={`${styles["btn"]} ${styles.secondary}`} onClick={()=>addPage(page+1)} title="page">Charger plus...</button>
                             }
                        </div>  
      <Fooler/>    
  </div>
  );
};

export default Publication; 
