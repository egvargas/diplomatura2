import React from "react";
import '../../src/styles/components/layout/style.css'
const HomePage = (props) => {
    return (
    <main className="holder">
          <div className="columnas" >  
                <div className="bienvenidos left">
                    <h2>Bienvenidos a GEN Botanicos</h2>
                    <p>Somos un emprendimientos, que nos dedicamos a complacer a los amantes del Gin Tonic con botanicos excentricos para que el trago sea un antes y un despues de cada ocasión.</p>      
          </div>
            <div className="whats right">
              <h2>Que es el GIN</h2>
              <div className="what">
                  <span className="cita">La ginebra es una bebida alcohólica destilada que posee un sabor predominante a colonia, nebrinas, los frutos del enebro. La ginebra es una de las categorías de destilados más amplia, con diversas regiones de producción, estilos y perfiles de sabor, que tienen en común las gálbulas o nebrinas de enebro.</span>
                  <span className="autor">Fuente: Wikipedia &copy;</span>    
              </div>
              </div>
              </div>
    </main>
    );
}

export default HomePage;