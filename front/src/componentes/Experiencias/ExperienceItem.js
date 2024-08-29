import React from "react";

const ExperienceItem = (props) => {
    const { titulo, imagen, body } = props;

    return (
        <div className="experiencia">
            <h1>{titulo}</h1>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>            
        </div>
    );
}

export default ExperienceItem;