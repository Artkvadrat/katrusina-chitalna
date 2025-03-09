import React, { useState } from "react";

import bookCover from "../../assets/images/bookCover.jpeg";

import "./HistoryBlock.css";

export const HistoryBlock = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="historyBlockWrapper" id="history">
      <h3>Історія книги</h3>

      <div className="bookDescriptionWrapper">
        <img src={bookCover} alt="Book cover" />
        <div className="bookDescription">
          <p className="quotes">“</p>
          <h4>Казка про зайчика Тьопу</h4>
          <h5>
            525 <span>грн</span>
          </h5>
          <p className="targetDate">Очікуємо з друку 1 квітня 2025</p>

          <button className="preorderButton">Передзамовити</button>

          <p className="bookDescriptionText">
            Це добра й тепла історія про сім’ю, дружбу та дорослішання. На
            початку ми знайомимося з Тьопою — зухвалим бешкетником, який хоче
            займатися тільки тим, що йому до вподоби: гуляти з друзями, бігати й
            стрибати в лісі, їсти багато цукерок і не слухатися мами. Але це
            зовсім не те, чого б хотіла його мама Зайчиха.
            <br />
            <br />
          </p>
          {isReadMore && (
            <p className="bookDescriptionText">
              І ось одного дня Тьопа приймає доросле рішення: «Я вже великий і
              чудово впораюся без мами!». Тож він залишається вдома сам.
              <br />
              <br />
              Чим завершиться ця історія? Чи вдасться Тьопі справді
              подорослішати? Відповіді знайдете в цій казці.
              <br />
              <br />
              Книжка містить три інтерактивні сторінки, які допоможуть малюку ще
              глибше зануритися в пригоди вуханя Тьопи.
            </p>
          )}

          <button
            className="bookDescriptionReadMoreButton"
            onClick={toggleReadMore}
          >
            {isReadMore ? "читати менше" : "читати більше"}
          </button>

          <p className="reviewBlock">
            *Казка для дітей віком від 3 до 6 років.
            <br />
            Має рецензію від дитячого психолога{" "}
            <a
              href="https://www.instagram.com/psiholog_alexandrovna/?hl=uk"
              target="_blank"
              rel="noreferrer"
            >
              Анни Грицькової
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
