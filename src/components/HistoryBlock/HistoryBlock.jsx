import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import bookCover from "../../assets/images/bookCover.jpeg";
import bookPage1 from "../../assets/images/bookPage-1.jpeg";
import bookPage2 from "../../assets/images/bookPage-2.jpeg";
import bookPage3 from "../../assets/images/bookPage-3.jpeg";
import bookPage4 from "../../assets/images/bookPage-4.jpeg";
import bookPage5 from "../../assets/images/bookPage-5.jpeg";

import "./HistoryBlock.css";

const sliderItems = [
  { original: bookCover },
  { original: bookPage1 },
  { original: bookPage2 },
  { original: bookPage3 },
  { original: bookPage4 },
  { original: bookPage5 },
];

export const HistoryBlock = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="historyBlockWrapper" id="history">
      <h3>Історія книги</h3>

      <div className="bookDescriptionWrapper">
        <div className="bookDescriptionCarousel">
          <ImageGallery
            items={sliderItems}
            showThumbnails={false}
            showPlayButton={false}
            showBullets={true}
            additionalClass="bookDescriptionCarousel"
          />
        </div>

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
