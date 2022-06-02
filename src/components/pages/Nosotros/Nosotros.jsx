import React from "react";
import mision from "../../../assets/imgs/mision.jpg";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <article>
        <img src={mision} alt="" />
        Fenagro es una entidad gremial de carácter privado sin ánimo de lucro, representa a la agricultura en Colombia, con el fin de impulsar bienestar  para los campesinos que son el motor de la economía alimentaria de nuestro país. Desarrollamos programas y proyectos productivos, que ofrecemos mediante una organización  democrática y representativa bajo los lineamientos de la oportunidad,  la eficiencia, la calidad. Encaminados al crecimiento humano, la innovación y mejoramiento tecnológico, el desarrollo sustentable y sostenible del sector son nuestras banderas para fomentar el desarrollo de la agricultura regional.
      </article>
    </div>
  );
};

export default Nosotros;
