import React, { useState, useEffect } from 'react';

// ReadMoreCard.jsx
// Single-file React component that injects its CSS into the page so you have
// both JSX and CSS in one place. Usage example is in the canvas comments.

const styles = `
.readmore-card{max-width:820px;margin:16px auto;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;color:#222}
.card{background:linear-gradient(180deg, #fff, #fbfbff);border:1px solid #e6e9ef;border-radius:12px;box-shadow:0 6px 18px rgba(35,42,60,0.06);overflow:hidden}
.card-header{display:flex;align-items:center;gap:12px;padding:16px 18px}
.card-header .title{font-size:1.05rem;font-weight:600}
.card-header .meta{margin-left:auto;font-size:0.85rem;color:#5b6b85}
.card-body{padding:0 18px 16px}
.excerpt{color:#344;line-height:1.45;margin-bottom:12px}
.media{display:flex;gap:12px;align-items:flex-start}
.media .thumb{flex:0 0 220px;height:140px;border-radius:8px;overflow:hidden;background:#f3f6fb;display:flex;align-items:center;justify-content:center}
.media .thumb img, .media .thumb video{width:100%;height:100%;object-fit:cover}
.media .content{flex:1}
.controls{display:flex;gap:8px;margin-top:12px}
.btn{background:#0f62fe;color:#fff;padding:8px 12px;border-radius:8px;border:none;cursor:pointer;font-weight:600}
.btn.secondary{background:transparent;color:#0f62fe;border:1px solid rgba(15,98,254,0.12)}
.pdf-link{display:inline-flex;align-items:center;gap:8px;text-decoration:none;padding:8px 10px;border-radius:8px;background:#fff;border:1px solid #e3e7f3;color:#0f62fe;font-weight:600}
.readmore{padding:12px 18px;border-top:1px dashed #eef2fb;background:linear-gradient(180deg,#fbfcff, #fff);}
.youtube-preview{position:relative;cursor:pointer}
.youtube-preview::after{content:'▶';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:28px;color:rgba(255,255,255,0.95);background:rgba(15,98,254,0.9);width:54px;height:54px;border-radius:999px;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(15,98,254,0.18)}
.kv{font-size:0.88rem;color:#475569}
@media (max-width:640px){.media{flex-direction:column}.media .thumb{width:100%;height:180px}}
`;

const Plus = ({
  title,
  excerpt = 'Ceci est un court extrait. Cliquez sur "Lire plus" pour afficher l\'intégralité du contenu et les médias associés.',
  typeFichier,
  image, // url string
  videoUrl, // local video file url
  youtubeId, // e.g. 'dQw4w9WgXcQ'
  pdfUrl // download url for PDF
})=>{
  const [open, setOpen] = useState(false);
  const [playingYoutube, setPlayingYoutube] = useState(false);

  useEffect(()=>{
    // inject styles once
    if (!document.getElementById('readmore-card-styles')){
      const s = document.createElement('style');
      s.id = 'readmore-card-styles';
      s.innerHTML = styles;
      document.head.appendChild(s);
    }
  },[]);

  alert(title)
  const renderMedia = () => {
    if (typeFichier==="VIDEO" && playingYoutube && youtubeId){
      const src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
      return (
        <div style={{width:'100%',aspectRatio:'16/9',borderRadius:8,overflow:'hidden'}}>
          <iframe
            title="youtube-player"
            src={src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{width:'100%',height:'100%'}}
          />
        </div>
      );
    }

    if (typeFichier==="VIDEO" && videoUrl){
      return (
        <video controls src={videoUrl} style={{width:'100%',borderRadius:8}} />
      );
    }

    if (typeFichier==="IMAGES" && image){
      return (
        <img src={image} alt="vignette" />
      );
    }

    if (typeFichier==="VIDEO" && youtubeId){
      // show thumbnail with play button
      const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      return (
        <div className="youtube-preview thumb" onClick={()=>setPlayingYoutube(true)}>
          <img src={thumb} alt="youtube thumb" />
        </div>
      );
    }

    return (
      <div className="thumb" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'#93a0b9'}}>
        Aucune media
      </div>
    );
  };

  return (
    <div className="readmore-card">
      <div className="card" role="article" aria-labelledby="rm-title">
        <div className="card-header">
          <div>
            <div id="rm-title" className="title">{title}</div>
            <div className="kv">Publié • <span className="meta">aujourd'hui</span></div>
          </div>
          <div className="meta">#lecture</div>
        </div>

        <div className="card-body">
          <div className="excerpt">{excerpt}</div>

          <div className="media">
            <div className="thumb">
              {renderMedia()}
            </div>

            <div className="content">
              <div className="kv">Résumé rapide et métadonnées. Ajoute ici une courte description plus détaillée lorsque le media est visible.</div>

              <div className="controls">
                <button className="btn" onClick={()=>setOpen(o=>!o)} aria-expanded={open}>
                  {open ? 'Réduire' : 'Lire plus'}
                </button>

                {pdfUrl && typeFichier==="PDF" && (
                  <a className="pdf-link" href={pdfUrl} target="_blank" rel="noopener noreferrer" download>
                    Télécharger PDF
n                  </a>
                )}

                <button className="btn secondary" onClick={()=>{navigator.clipboard?.writeText(window.location.href)}} title="Copier le lien">
                  Partager
                </button>
              </div>
            </div>
          </div>

        </div>

        {open && (
          <div className="readmore">
            <div style={{paddingBottom:12}}>
              <strong>Contenu complet :</strong>
              <p style={{marginTop:8}}>Voici le contenu détaillé qui s'affiche quand l'utilisateur clique sur "Lire plus". Tu peux y mettre un article complet, des étapes, des citations, ou tout autre bloc HTML riche.</p>
            </div>

            <div>
              {/* If there's a youtubeId but the user hasn't clicked the thumb, show a button to open inline */}
              {youtubeId && !playingYoutube && (
                <div style={{marginBottom:12}}>
                  <button className="btn" onClick={()=>setPlayingYoutube(true)}>Voir la vidéo YouTube</button>
                </div>
              )}

              {/* Show media large when open */}
              <div style={{marginTop:8}}>
                {playingYoutube || videoUrl ? (
                  <div style={{width:'100%',aspectRatio:'16/9'}}>
                    {renderMedia()}
                  </div>
                ) : (
                  <div style={{color:'#475569'}}>Aucun média supplémentaire.</div>
                )}
              </div>

              {/* Optional PDF inline preview (simple) */}
              {pdfUrl && (
                <div style={{marginTop:12}}>
                  <div style={{fontWeight:700, marginBottom:8}}>Aperçu du PDF</div>
                  <iframe src={pdfUrl} title="pdf-preview" style={{width:'100%',height:420,border:'1px solid #e6e9ef',borderRadius:8}} />
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

/*
Usage example:

import ReadMoreCard from './ReadMoreCard.jsx';

<ReadMoreCard
  title="Comment bien utiliser nodemon"
  excerpt="Un guide court pour démarrer rapidement..."
  image="/assets/thumb.jpg"
  // or videoUrl="/media/intro.mp4"
  // or youtubeId="dQw4w9WgXcQ"
  pdfUrl="/docs/guide.pdf"
/>

This single file injects its CSS automatically. If you prefer to extract the CSS, copy the 'styles' string content
and save it into a ReadMoreCard.css file, then remove the injection code in useEffect.
*/


export default Plus;
