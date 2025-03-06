import React, { useState } from "react";

import authorPhoto from "../../assets/images/authorPhoto.jpeg";
import aboutAuthorBottomImage from "../../assets/images/aboutAuthorBottomImage.jpeg";

import "./AboutAuthor.css";

export const AboutAuthor = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="aboutAuthorWrapper" id="about-author">
      <div className="wrapperCover">
        <h3>Про автора</h3>

        <div className="aboutAuthorBlock">
          <img src={authorPhoto} alt="author" />
          <div className="aboutAuthorText">
            <p>Привіт!</p>
            <p>
              Я Катя Гуртова, і я рада вітати
              <br />
              тебе в <span>Катрусиній читальні!</span>
            </p>
            <p>
              Я письменниця, копірайтерка та дуже творча СММниця.
              <br />
              <br />
              “Казка про зайчика Тьопу” — це моє дитинство, спогади та любов,
              збережені на 24-х сторінках маленької книжки. Ця історія належала
              моїй бабусі Мусі Сергіївні Гуртовій, а я лише зібрала її,
              намалювала зайців з ілюстраторкою{" "}
              <a
                href="https://www.instagram.com/zdor_katty/?hl=uk"
                target="_blank"
                rel="noreferrer"
              >
                Катею Здор
              </a>{" "}
              і показала світові.
            </p>

            {isReadMore && (
              <p>
                Муся відкрила для мене світ казок та історій, в яких можливо
                все, що тільки можна уявити. Одного дня я уявила, що можу
                надрукувати “Тьопу”. І сьогодні сотні дітей по всій країні та
                світу мають цю книжку в себе на поличці. Здається, Муся говорила
                правду.
                <br />
                <br />Я надзвичайно люблю цю історію та вірю, що ваш малюк
                полюбить її так само, і захоче перечитувати знову і знову.
              </p>
            )}

            <button
              className="aboutAuthorReadMoreButton"
              onClick={toggleReadMore}
            >
              {isReadMore ? "читати менше" : "читати більше"}
            </button>
          </div>
        </div>

        {/*<img*/}
        {/*  src={aboutAuthorBottomImage}*/}
        {/*  className="aboutAuthorBottomImage"*/}
        {/*  alt="Bottom backhround"*/}
        {/*/>*/}
      </div>
    </div>
  );
};
