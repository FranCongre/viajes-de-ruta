import React from "react";
import '../../Styles/Componentes/Pages/Experiencias.css'


const ExperienceItem = (props) => {
    const { title, imagen, body } = props;

    return (
        <div className="cajas">
            <div>
                <img src={imagen} />
            </div>
            <div >
                <h3>{title}</h3>
                <div className="p" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div>
    );
}

export default ExperienceItem;