import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';


const Projet = ({ projectNumber }) => {
    const [currentData] = useState(projectsData);
    const projet = currentData[projectNumber]
    console.log(projet);
    return (
        <div className='proj'>
            <div className="proj-content">
                <div className="proj-text">
                  <h1>{projet.title}</h1>
                  <p>{projet.date}</p>
                  <ul>
                      {
                      projet.languages.map((langue) =>{
                          return(
                            <li>{langue}</li>
                          )
                      })
                      
                      }
                  </ul>  
                </div>
                 
            </div>
            
        </div>
    );
};

export default Projet;