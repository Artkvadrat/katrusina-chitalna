import React from "react";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper" id="contacts">
        <div className="footerWrapperCover">
          <div className="footerContentWrapper">
            <h3>
              Зробіть передзамовлення
              <br />
              прямо зараз
            </h3>
            <button className="preorderButton">Передзамовити</button>

            <div className="footerInfo">
              <div>
                <p>
                  Написати свої враження про книжку можна сюди:{" "}
                  <a
                    href="https://www.instagram.com/kateryna_hurtovaaa/?hl=uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  Написати листа мені можна сюди:{" "}
                  <a href="mailto:katrusina.chitalna17@gmail.com">
                    katrusina.chitalna17@gmail.com
                  </a>
                </p>
                <p>
                  <br />
                  Після заповнення форми я звʼяжуся з вами в Телеграм
                  <br />
                  для уточнення усіх деталей по доставці та оплаті
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p>
                  Доставка можлива по Україні та за кордон
                  <br />
                  за актуальними тарифами «Нової пошти»
                </p>
                <p>
                  <br />
                  Термін відправки 1-3 дні від очікуваної дати друку
                  <br />
                  (1 квітня 2025 року)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottomContentWrapper">
        <div className="footerBottomContent">
          <div>
            <ul>
              <li>
                <a href="#about-author">Про автора</a>
              </li>
              <li>
                <a href="#history">Про книгу</a>
              </li>
              <li>
                <a href="#contacts">Контакти</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="#contacts">Політика конфіденційності</a>
              </li>
              <li>
                <a href="#contacts">Доставка</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
