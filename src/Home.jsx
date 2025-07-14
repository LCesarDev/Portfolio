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

        </div>

        
        

    );
    
    
}

export default Home;