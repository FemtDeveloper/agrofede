import React from "react";
import { useState } from "react";
import mision from "../../../assets/imgs/mision.jpg";
import vision from "../../../assets/imgs/vision.png";
import escalera from "../../../assets/imgs/escalera-al-campo.png";
import "./Nosotros.css";

const Nosotros = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveVision, setIsActiveVision] = useState(false);
  const [isActiveObjetivos, setIsActiveObjetivos] = useState(false);
  return (
    <div className="nosotros-container">
      <article id="mision">
        <img src={mision} alt="" />
        <h2>Misión</h2>
        <p>
          Fenagro es una entidad gremial de carácter privado sin ánimo de lucro,
          representa a la agricultura en Colombia, con el fin de impulsar
          bienestar para los campesinos que son el motor de la economía
          alimentaria de nuestro país.
          {isActive && (
            <span>
              {" "}
              Desarrollamos programas y proyectos productivos, que ofrecemos
              mediante una organización democrática y representativa bajo los
              lineamientos de la oportunidad, la eficiencia, la calidad.
              Encaminados al crecimiento humano, la innovación y mejoramiento
              tecnológico, el desarrollo sustentable y sostenible del sector son
              nuestras banderas para fomentar el desarrollo de la agricultura
              regional.
            </span>
          )}
          <span onClick={() => setIsActive(!isActive)} className="verMas">
            {" "}
            [{isActive ? "ver menos" : "ver más"}]
          </span>
        </p>{" "}
      </article>
      <article id="vision">
        <img src={vision} alt="" />
        <h2>Visión</h2>
        <p>
          Fenagro es una entidad gremial de carácter privado sin ánimo de lucro,
          representa a la agricultura en Colombia, con el fin de impulsar
          bienestar para los campesinos que son el motor de la economía
          alimentaria de nuestro país.
          {isActiveVision && (
            <span>
              {" "}
              Desarrollamos programas y proyectos productivos, que ofrecemos
              mediante una organización democrática y representativa bajo los
              lineamientos de la oportunidad, la eficiencia, la calidad.
              Encaminados al crecimiento humano, la innovación y mejoramiento
              tecnológico, el desarrollo sustentable y sostenible del sector son
              nuestras banderas para fomentar el desarrollo de la agricultura
              regional.
            </span>
          )}
          <span
            onClick={() => setIsActiveVision(!isActiveVision)}
            className="verMas"
          >
            {" "}
            [{isActiveVision ? "ver menos" : "ver más"}]
          </span>
        </p>{" "}
      </article>
      <article id="objetivos">
        <img src={escalera} alt="" />
        <h2>Objetivos</h2>
        <p>
          Fenagro es una entidad gremial de carácter privado sin ánimo de lucro,
          representa a la agricultura en Colombia, con el fin de impulsar
          bienestar para los campesinos que son el motor de la economía
          alimentaria de nuestro país.
          {isActiveObjetivos && (
            <span>
              {" "}
              Desarrollamos programas y proyectos productivos, que ofrecemos
              mediante una organización democrática y representativa bajo los
              lineamientos de la oportunidad, la eficiencia, la calidad.
              Encaminados al crecimiento humano, la innovación y mejoramiento
              tecnológico, el desarrollo sustentable y sostenible del sector son
              nuestras banderas para fomentar el desarrollo de la agricultura
              regional.
            </span>
          )}
          <span
            onClick={() => setIsActiveObjetivos(!isActiveObjetivos)}
            className="verMas"
          >
            {" "}
            [{isActiveObjetivos ? "ver menos" : "ver más"}]
          </span>
        </p>{" "}
      </article>
    </div>
  );
};

export default Nosotros;
