import React from "react";

import "../Styles/Componentes/Pages/Experiencias.css";
import "../Styles/Componentes/Layout/Aside.css";
import Aside from "../componentes/Layout/Aside";
import { useState, useEffect } from "react";
import axios from "axios";
import ExperienceItem from "../componentes/Experiencias/ExperienceItem";

const Experiencias = (props) => {
  const [loading, setLoading] = useState(false);
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    const cargarExperiencias = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/experiencias"
      );
      setExperiencias(response.data);
      setLoading(false);
    };
    cargarExperiencias();
  }, []);
  return (
    <div>
      <div className="cuerpo1">
        <div className="experiencias">
          <h1>Experiencias</h1>
          <div>
            {loading ? (
              <p>Cargando...</p>
            ) : (
              experiencias.map((item) => (
                <ExperienceItem
                  key={item.id}
                  title={item.titulo}
                  imagen={item.imagen}
                  body={item.texto}
                />
              ))
            )}
          </div>
        </div>

        <Aside />
      </div>
    </div>
  );
};

export default Experiencias;
