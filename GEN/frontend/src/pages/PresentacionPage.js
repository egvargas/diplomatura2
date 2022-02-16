import React from "react";
import '../../src/styles/components/layout/style.css'
const PresentacionPage = (props) => {
    return (
        <main className="holder">

        <div className="galeria">
          <div className="foto">
            <img src="img/1.jpg" width="250px" />
          </div>
          <div className="foto">
            <img src="img/2.jpg" width="250px" />
          </div>
          <div className="foto" >
            <img src="img/9.JPEG" width="250px" />
          </div>
          <div className="foto">
            <img src="img/6.jpg" width="250px" />
          </div>    
          <div className="foto">
            <img src="img/10.JPEG" width="250px" />
          </div>            
         
        </div>
        
    </main>
    );
    }
export default PresentacionPage;