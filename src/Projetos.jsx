import React from "react";
import "./Projetos.css"

function Projetos(){

    return(

        
            <div className="content-projetos">
                <p className="projetos-title">Projetos</p>
                <div className="info-projetos">
                    <div className="content-cloneflix">
                        <img src="/cloneflix.jpg"/>
                        <p>sobre a clone flix, um projeto desenvolvido para mostrar minhas habilidades em React.js</p>
                    </div>
                    <div className="content-cesarjogos">
                        <img src="CesarJogos.jpg"/>
                    </div>
                </div>
            </div>

        

    );
}

export default Projetos;