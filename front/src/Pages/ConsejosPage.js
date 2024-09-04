import React from "react";
import '../Styles/Componentes/Layout/Aside.css'
import Aside from "../componentes/Layout/Aside";
import { useState, useEffect } from "react";
import axios from 'axios';
import '../Styles/Componentes/Pages/Consejos.css'
import ConsejosItem from "../componentes/Consejos/ConsejosItem";

const Consejos = (props) => {
  const [loading, setLoading] = useState(false);
  const [consejos, setConsejos] = useState([]);

  useEffect(() => {
    const cargarConsejos = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/consejos');
      setConsejos(response.data);
      setLoading(false);
    }
    cargarConsejos();
  }, []);
  return (
    <div>
      <div className="cuerpo1">
        <main className="consejos">
          <div>
            <h1>Consejos</h1>

            {
              loading ? (
                <p>Cargando...</p>
              ) : (
                consejos.map(item => <ConsejosItem key={item.id}
                  title={item.titulo} subtitle={item.subtitulo} body={item.texto} />)
              )
            }
          </div>

        </main>
        <Aside />
      </div>
    </div>
  );
}

export default Consejos;