import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Menu from "./menu.jsx"
import Fooler from "./fooler.jsx"; 
import {getAllPublications} from "../services/publicationServices" 
import { Link } from "react-router-dom";
import {API_URL} from "../services/imageService"

const Publication = () => { 

    const [datas, setDatas] = useState({data:[]});
    const [sousmenu, setSousmanu] =useState("")
    const [page,setPage]=useState(1); 
    const [type,setType]=useState(null); 
    const pageSize = 6;

   const dataPublication =async (page,size)=>{ 
        const data=await getAllPublications(null,page,size); 
        setDatas(data) 
      } 

  const addPage=(val)=>{ 
        fecthDataBy(type,val,pageSize)
        setPage(val);
    } 

    const fecthDataBy=async (type,page,size)=>{
        setType(type)
        if (type!==null) {
            const data=await getAllPublications(type,page,size);   
            setDatas(data)
            setSousmanu(type)
        }else{
        const data=await getAllPublications(null,page,size);   
        setDatas(data)   
        setSousmanu("")
        }
         
    }

    // Extract YouTube video ID from various URL formats
    const extractYouTubeId = (url) => {
      if (!url) return null;
      try {
        const u = new URL(url);
        if (u.hostname.includes('youtu.be')) {
          // https://youtu.be/VIDEO_ID
          return u.pathname.replace('/', '').split('?')[0];
        }
        if (u.hostname.includes('youtube.com')) {
          // https://www.youtube.com/watch?v=VIDEO_ID
          if (u.searchParams.get('v')) return u.searchParams.get('v');
          // https://www.youtube.com/embed/VIDEO_ID or /shorts/VIDEO_ID
          const parts = u.pathname.split('/').filter(Boolean);
          const idx = parts.findIndex(p => p === 'embed' || p === 'shorts' || p === 'v');
          if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
        }
      } catch (_) {
        // Not a valid URL, maybe a raw ID passed already
        if (typeof url === 'string' && url.length >= 10 && url.length <= 64) return url;
      }
      return null;
    };
 
     useEffect(() => {
    dataPublication(page,pageSize) 
    },[page]);
    
  return (
    <div className={styles.contenerprojet}> 
      <Menu/>

   <section className={styles["filter-section"]}>
        <div className={`${styles.container}`}>
            <div className={styles["filter-buttons"]}>
                <button className={`${styles["filter-btn"]} ${sousmenu==""?styles.active:""}`} onClick={()=>fecthDataBy(null,1,6)}>Tous</button>
                <button className={`${styles["filter-btn"]} ${sousmenu=="RAPPORTS"?styles.active:""}`} onClick={()=>fecthDataBy("RAPPORTS",1,6)}>Rapports</button>
                <button className={`${styles["filter-btn"]} ${sousmenu=="ACTUALITES"?styles.active:""}`} onClick={()=>fecthDataBy("ACTUALITES",1,6)}>Actualités</button> 
                <button className={`${styles["filter-btn"]} ${sousmenu=="NEWSLETTER"?styles.active:""}`} onClick={()=>fecthDataBy("NEWSLETTER",1,6)}>Newsletter</button>
                <button className={`${styles["filter-btn"]} ${sousmenu=="TEMOIGNAGE"?styles.active:""}`} onClick={()=>fecthDataBy("TEMOIGNAGE",1,6)}>Témoignages</button>
            </div>
        </div>
    </section>  

    <section className={styles["page-header"]} style={{backgroundImage:` url('/fondEcran.svg')`}}>
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
                    src={`${API_URL}/${element.fichier}`}
                    alt={element.title}
                    loading="lazy"
                    
                  />
                )}

                {element.typeFichier === "VIDEO" && (() => {
                  const yid = extractYouTubeId(element.fichier);
                  const src = yid ? `https://www.youtube.com/embed/${yid}` : element.fichier;
                  return (
                    <iframe
                      src={src}
                      title={element.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  );
                })()} 
                   
                    <div className={styles["publication-content"]}>
                        <div className={styles["publication-meta"]}>
                            <span className={`${styles["category-badge"]} ${styles.report}`}>{element.type}</span>
                            <span className={styles["date"]}>{element.date.slice(0,10)}</span>
                        </div>
                        <h3>{element.title}</h3>
                        <p>{element.contenu.slice(0,200)} ...</p>
                        <div className={styles["publication-footer"]}>
                             {element.typeFichier === "PDF"? ( 
                            <a href={`${API_URL}/${element.fichier}`}  className={styles["link-arrow"]}>Télécharger →</a>
                                ): ( 
                            // Preserve state for fast nav, but include URL params for share/deep-linking
                            <Link to={`/plus?id=${element.id}&type=publication`} state={{ data: element }}  className={styles["link-arrow"]}>Voir plus →</Link>
                                )} 
                        </div>
                    </div>
                </div>
                       ))}

                 
            </div>
         </div>
      </section>
         
 
                       <div className={styles["load-more-section"]}>
                       {(() => {
                          const totalPages = (
                            datas?.totalPages ??
                            datas?.totalPage ??
                            datas?.pages ??
                            (datas?.totalElements && (datas?.size || pageSize)
                              ? Math.ceil(datas.totalElements / (datas.size || pageSize))
                              : undefined)
                          );

                          // Fallback: show a small range around current page if total unknown
                          const pagesCount = typeof totalPages === 'number' && totalPages > 0
                            ? totalPages
                            : Math.max(page + 2, 3);

                          const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

                          return (
                            <div className={styles["pagination"]}>
                              {page > 1 && (
                                <button className={styles["pagination-btn"]} onClick={() => addPage(page - 1)} title="Précédent">
                                  «
                                </button>
                              )}
                              {pages.map((p) => (
                                <button
                                  key={p}
                                  className={`${styles["pagination-btn"]} ${p === page ? styles.active : ""}`}
                                  onClick={() => addPage(p)}
                                  title={`Page ${p}`}
                                  disabled={p === page}
                                >
                                  {p}
                                </button>
                              ))}
                              {typeof totalPages === 'number' ? (
                                page < totalPages && (
                                  <button className={styles["pagination-btn"]} onClick={() => addPage(page + 1)} title="Suivant">
                                    »
                                  </button>
                                )
                              ) : (
                                // Unknown total, allow next
                                <button className={styles["pagination-btn"]} onClick={() => addPage(page + 1)} title="Suivant">
                                  »
                                </button>
                              )}
                            </div>
                          );
                       })()}
                     </div>  
      <Fooler/>    
  </div>
  );
};

export default Publication; 
