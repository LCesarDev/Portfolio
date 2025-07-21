import React from "react";
import './Sobre.css'


function Sobre(){

    return(

        <div className="content-sobre">
            <p className="sobre-title">Sobre</p>
                <div className="sobre-text">Desenvolvedor front-end com experiência prática em React, consumo de APIs REST, 
                autenticação com Firebase e deploy de aplicações. Atuante em projetos publicados, com 
                domínio em versionamento (Git) e integração com design responsivo. Forte perfil 
                autodidata, adaptável e focado em evolução contínua.
                <div className="tags" >
                    <span className="tag">JavaScript</span>
                    <span className="tag">Css3</span>
                    <span className="tag">React</span>
                    <span className="tag">GitHub</span>
                    <span className="tag">HTML</span>
                    <a href="/Curriculo-LucasCesar_DevFrontEndJunior.pdf" download>
                        <button className="button-cv">Baixar CV</button>
                    </a>
                </div>

                </div>
            
          
            
            
        </div>

        );
    
    
}

export default Sobre;