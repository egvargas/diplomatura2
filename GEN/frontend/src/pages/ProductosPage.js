import React from "react";
import '../../src/styles/components/pages/Productos.css'

const ProductosPage = (props) => {
    return (
        <main className="holder">
        <div className="botanicos">
            <div className="botanico">
                <img src="img/cardamomo.jpeg" />
                <h5>Cardamomo</h5>
                <p>Arroma Exotico, entre dulce y picante. Dos o tres bayas aplastadas ligeramente.</p>
            </div>
        </div>
        <div className="botanicos">
            <div className="botanico">
                <img src="img/arandanos.jpeg" />
                <h5>Arandanos</h5>
                <p>Dulce con toques acidos, se recomienda con gin, vokda y ron. Tres o cuatro bayas en tu copa, dejar macerar.</p>
            </div>
        </div>
        <div className="botanicos">
            <div className="botanico">
                <img src="img/hibiscus.jpeg" />
                <h5>Hibiscus</h5>
                <p>Floral tinte violeta, se recomienda en gin, vodka y tequila. Dos o tres granos en tu copa.</p>
            </div>
        </div>
        <div className="botanicos">
            <div className="botanico">
                <img src="img/jengibre.jpeg" />
                <h5>Jengibre</h5>
                <p>Sabor picante y ligeramente amargo, se recomienda con gin, ron, brandy o vodka. Maceralo con tu espirituoso preferido y mantenelo en la copa.</p>
            </div>
        </div>         
         
    </main>
    );
}
 export default ProductosPage;