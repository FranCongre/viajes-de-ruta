import React from "react";
import '../../Styles/Componentes/Layout/Aside.css'

const Aside = (props) =>{
    return(
        <aside className="lateral">
          <div className="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>
              Tambien puedes contactarte con nosotros por los siguientes medios
            </p>
            <ul>
              <li>Telefono : <br></br>354364017</li>
              <li>Mail : <br></br>ejemplo@ejemplo </li>
              <li>redes :</li>
              <ul>
                <li> instagram</li>
                <li>youtube</li>
                <li>tiktok</li>
              </ul>
            </ul>
          </div>
        </aside>
    );
}

export default Aside;