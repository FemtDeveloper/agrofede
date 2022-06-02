import React from "react";
import vegetales from "../../assets/imgs/vegetables.webp";
import "./News.css";

const News = () => {
  return (
    <div className="news-container">
      <p className="text-muted h4 mr-auto">Ultimas Noticias</p>
      <article>
        <a href="https://fonts.google.com/" target="_blank">
          <img src={vegetales} alt="" />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iste explicabo cupiditate?
        </a>
      </article>
      <article>
        <img src={vegetales} alt="" />
        <a href="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iste explicabo cupiditate?
        </a>
      </article>
      <article>
        <img src={vegetales} alt="" />
        <a href="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iste explicabo cupiditate?
        </a>
      </article>
    </div>
  );
};

export default News;
