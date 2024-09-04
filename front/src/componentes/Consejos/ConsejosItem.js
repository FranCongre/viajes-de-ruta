import React from "react";
import '../../Styles/Componentes/Pages/Consejos.css'


const ConsejosItem = (props) => {
    const { title, subtitle, body } = props;

    return (
        <div className="cuerpo1">
        <div className="consejos">
            <div className="caja">
                <div className="conteiner1">
                
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <div className="p" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
            </div>
        </div>
        </div>

    );
}

export default ConsejosItem;