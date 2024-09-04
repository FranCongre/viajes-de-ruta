import React from "react";
import '../Styles/Componentes/Pages/HomePage.css'

const HomePage = (props) => {
    return (
        <div>
            <div className="cuerpo">
                <main className="bienvenido">
                    <div>
                    <img src="./imagenes/bienvenido.jpg" alt="bienvenido" />
                    </div>
                    <h2>BIENVENIDOS</h2>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aspernatur nihil odit dicta dolorem quia enim adipisci ad in
                            repellat odio, beatae cumque tempore sequi, similique est dolores
                            cupiditate ea! Velit.
                        </p>
                    </div>
                </main>
                <aside className="botones">
                    <div>
                        <a href="../Experiencias">
                            <h3>Nuestros viajes</h3>
                            <img
                                src="./imagenes/img-botones/bx-message-alt-detail.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div>
                        <a href="../Consejos">
                            <h3>¿Queres salir de ruta? Tenemos algunos consejos</h3>
                            <img src="./imagenes/img-botones/bx-health.svg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="../Sumate">
                            <h3>¡Sumate, no salgas solo!</h3>
                            <img src="./imagenes/img-botones/bx-user-plus.svg" alt="" />
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default HomePage;