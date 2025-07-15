import React from "react";
import { TypeAnimation } from 'react-type-animation';
import './Home.css'


function Home(){


    return(

        <div className="ContentHome">
   <TypeAnimation
        sequence={[
          `Lucas César`,
          999999
        ]}
        wrapper="div"
        speed={200}
        repeat={0}
        cursor={true}
        className="digitando"
      />

        <p>Desenvolvedor Front-end</p>

        <div className="Content-logos" >
          <img src="/React.png" alt="React_image" />
          <img src="/Js.png" alt="Js_image" />
          <img src="/Css3.png" alt="Css_image" />
          <img src="/Git.png" alt="git_image" />
          
        </div>

        </div>

        
        

    );
    
    
}

export default Home;