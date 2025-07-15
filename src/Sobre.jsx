import React from "react";
import './Sobre.css'


function Sobre(){

    return(

        <div className="content-sobre">
            <img src="/programador.png" alt="programador-img" />
            <p className="sobre-title">Sobre
                <p>Desenvolvedor front-end com experiência prática em React, consumo de APIs REST, 
                autenticação com Firebase e deploy de aplicações. Atuante em projetos publicados, com 
                domínio em versionamento (Git) e integração com design responsivo. Forte perfil 
                autodidata, adaptável e focado em evolução contínua.</p>
                  <div>
                <button>JavaScript</button>
                <button>Css3</button>
                <button>React</button>
                <button>GitHub</button>
                <button>HTML</button>
            </div>
            </p>
          
            
            
        </div>

        );
    
    
}

export default Sobre;