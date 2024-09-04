import React from "react";
import { useState } from "react";
import axios from "axios";
import '../Styles/Componentes/Pages/Sumate.css'
import '../Styles/Componentes/Layout/Aside.css'

const Sumate = (props) => {

    const initialForm = {
      nombre : '',
      email : '',
      telefono : '',
      lugar : '',
      texto : ''
    }

    const [sending, setSending] = useState(false);
    const [msg , setMsg] = useState('');
    const [formData, setFromData] = useState(initialForm);

    const handleChange = e => {
      const { name, value} = e.target;
      setFromData(oldData => ({
        ...oldData,
        [name]:value
      }))
    }

    const handleSubmit = async e => {
      e.preventDefault();
      setMsg('');
      setSending(true) 
      const response = await axios.post('http://localhost:3000/api/sumate', formData);
      setSending(false);
      setMsg(response.data.message);
      if (response.data.error === false){
        setFromData(initialForm)
      }
    }

  return (
    <div>
      <div class="cuerpo1">
        <main class="main" >
          <h2>¡Recorre el Mundo con Nosotros!</h2>
          <form action="/sumate" method="post" onSubmit={handleSubmit} className="Formulario">
            <div class="label">
              <label for="Nombre"> Nombre <br /></label>
              <label for="Email"> Email </label>
              <label for="Telefono"> Teléfono </label>
              <label for="Provincia"> Provincia </label>
              <label for="Mensaje"> Mensaje </label>
              <p><input className="Enviar" type="submit" value='Enviar'/></p>
            </div>
            <div class="input">
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                id="telefono"
                name="telefono"
                placeholder="sin 0 ni 15"
                value={formData.telefono}
                onChange={handleChange}
              /><br />
              <input type="text" id="Provincia" name="lugar" 
              value={formData.lugar}
              onChange={handleChange}/><br />
              <textarea
                type="text"
                name="texto"
                placeholder="¡Contanos un poco de vos y tus experiencias!"
                value={formData.texto}
                onChange={handleChange}
              ></textarea>

            </div>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p> {msg} </p> : null}
          </form>
          
           
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
}

export default Sumate;