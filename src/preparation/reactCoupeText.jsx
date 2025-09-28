// function ProjectCard({ project }) {
//   // Limite à 100 caractères
//   const shortDescription =
//     project.description.length > 100
//       ? project.description.substring(0, 100) + "..."
//       : project.description;

//   return (
//     <div className="project-card-detailed" data-category={project.category}>
//       <img src={project.image} alt={project.title} />
//       <div className="project-content">
//         <div className="project-meta">
//           <span className={`category-badge ${project.category.toLowerCase()}`}>
//             {project.category}
//           </span>
//           <span className={`status-badge ${project.status.toLowerCase()}`}>
//             {project.status}
//           </span>
//         </div>

//         <h3>{project.title}</h3>
//         <p>{shortDescription}</p>

//         <div className="project-stats">
//           <div className="stat-item">
//             <span className="stat-icon">👥</span>
//             <div>
//               <div className="stat-number">{project.beneficiaries}</div>
//               <div className="stat-label">Bénéficiaires</div>
//             </div>
//           </div>
//           <div className="stat-item">
//             <span className="stat-icon">💰</span>
//             <div>
//               <div className="stat-number">{project.budget}</div>
//               <div className="stat-label">Budget</div>
//             </div>
//           </div>
//           <div className="stat-item">
//             <span className="stat-icon">📅</span>
//             <div>
//               <div className="stat-number">{project.year}</div>
//               <div className="stat-label">Année</div>
//             </div>
//           </div>
//         </div>

//         <div className="progress-section">
//           <div className="progress-header">
//             <span>Avancement</span>
//             <span className="progress-percentage">{project.progress}%</span>
//           </div>
//           <div className="progress-bar">
//             <div
//               className="progress-fill"
//               style={{ width: `${project.progress}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
