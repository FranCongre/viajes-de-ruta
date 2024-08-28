import React from "react";
import '../Styles/Componentes/Pages/Sumate.css'
import '../Styles/Componentes/Layout/Aside.css'

const Sumate = (props) => {
  return (
    <div>
      <div class="cuerpo1">
        <main class="main" >
          <h2>¡Recorre el Mundo con Nosotros!</h2>
          <form action="">
            <div class="label">
              <label for="Nombre"> Nombre <br /></label>
              <label for="Email"> Email </label>
              <label for="Telefono"> Telefono </label>
              <label for="Provincia"> Provincia </label>
              <label for="Mensaje"> Mensaje </label>
              <button><h4>Enviar</h4></button>
            </div>
            <div class="input">
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre completo"
              /><br />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
              /><br />
              <input
                type="text"
                id="telefono"
                name="telefono"
                placeholder="sin 0 ni 15"
              /><br />
              <input type="text" id="Provincia" name="Provincia" /><br />
              <textarea
                type="text"
                placeholder="¡Contanos un poco de vos y tus experiencias!"
              ></textarea>

            </div>

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