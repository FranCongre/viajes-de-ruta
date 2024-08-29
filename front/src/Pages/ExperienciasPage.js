import React from "react";

import '../Styles/Componentes/Pages/Experiencias.css'
import '../Styles/Componentes/Layout/Aside.css'
import Aside from "../componentes/Layout/Aside";
import { useState, useEffect } from "react";
import axios from 'axios';

const Experiencias = (props) => {
  const [loading, setLoading] = useState(false);
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    const cargarExperiencias = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/experiencias');
      setExperiencias(response.data);
      setLoading(false);
    }
    cargarExperiencias();
  }, []);
  return (
    <div>
      <div className="cuerpo1">
        <main className="experiencias">
          <div className="cajas">
            <img src="https://placehold.co/400x200" alt="" />
            <div>
              <h2>Titulo</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                dolore esse numquam laboriosam soluta similique ad placeat
                minima impedit, iure quasi quam facere vel quos eius harum
                cupiditate animi commodi!
              </p>
            </div>
          </div>
          <div className="cajas">
            <img src="https://placehold.co/400x200" alt="" />
            <div>
              <h2>Titulo</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                dolore esse numquam laboriosam soluta similique ad placeat
                minima impedit, iure quasi quam facere vel quos eius harum
                cupiditate animi commodi!
              </p>
            </div>
          </div>
          <div className="cajas">
            <img src="https://placehold.co/400x200" alt="" />
            <div>
              <h2>Titulo</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                dolore esse numquam laboriosam soluta similique ad placeat
                minima impedit, iure quasi quam facere vel quos eius harum
                cupiditate animi commodi!
              </p>
            </div>
          </div>
          <div className="cajas">
            <img src="https://placehold.co/400x200" alt="" />
            <div>
              <h2>Titulo</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                dolore esse numquam laboriosam soluta similique ad placeat
                minima impedit, iure quasi quam facere vel quos eius harum
                cupiditate animi commodi!
              </p>
            </div>
          </div>
        </main>
        <aside class="lateral">
          <div class="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>
              Tambien puedes contactarte con nosotros por los siguientes medios
            </p>
            <ul>
              <li>Telefono : 354364017</li>
              <li>Mail : ejemplo@ejemplo</li>
              <li>redes :</li>
              <ul>
                <li>instagram</li>
                <li>youtube</li>
                <li>tiktok</li>
              </ul>
            </ul>
          </div>
        </aside>
      </div>
      </div>


      );
};

      export default Experiencias;
