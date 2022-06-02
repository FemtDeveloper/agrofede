import React from "react";
import bancredito from "../../assets/imgs/bancredito.jpg";
import trabajoRemunerado from "../../assets/imgs/trabajoRemunerado.webp";
import alzaenal from "../../assets/imgs/alzaenal.jpg";
import "./News.css";

const News = () => {
  return (
    <div className="news-container">
      <p className="text-muted h2 mr-auto">Ultimas Noticias</p>
      <article>
        <a href="https://www.larepublica.co/economia/31-2-de-las-mujeres-en-zonas-rurales-se-encuentran-en-situacion-de-pobreza-3370282" target="_blank">
          <img src={trabajoRemunerado} alt="" />
          En zonas rurales 31,2% corresponde a las mujeres que están en situación de pobreza
        </a>
      </article>
      <article>
        <a href="https://www.minagricultura.gov.co/noticias/Paginas/M%C3%A1s-de-26-000-emprendedores-rurales-podr%C3%A1n-acceder-a-l%C3%ADnea-de-microcr%C3%A9dito-gracias-a-convenio-firmado-entre-El-Campo-Empren.aspx">
          <img src={alzaenal} alt="" />
          Más de 26.000 emprendedores rurales podrán acceder a línea de microcrédito gracias a convenio firmado entre El Campo Emprende y Bancamía
        </a>
      </article>
      <article>
        <a href="https://digital.bancoagrario.gov.co/api/campaigns/referral/572b0cd9-ff2e-4159-8a27-82a94721308f">
          <img src={bancredito} alt="" />
          Solicita tu CREDITO al Banco Agrario en LINEA!!!!!
        </a>
      </article>
    </div>
  );
};

export default News;
