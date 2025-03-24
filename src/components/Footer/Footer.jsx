import React from "react";

import {
  usePreorderModal,
  usePrivacyModal,
  useDeliveryModal,
  useInformationMessage,
} from "../../modals";
import gmailIcon from "../../assets/icons/gmail.png";
import instagramIcon from "../../assets/icons/instagram.png";
import telegramIcon from "../../assets/icons/telegram.png";

import "./Footer.css";
import { Tooltip } from "../Tooltip";

export const Footer = () => {
  const { component: preorderModal, onOpen: preorderModalOpen } =
    usePreorderModal();
  const { component: privacyModal, onOpen: onPrivacyModalOpen } =
    usePrivacyModal();
  const { component: deliveryModal, onOpen: onDeliveryModalOpen } =
    useDeliveryModal();
  const { component: informationMessage, onShowing } = useInformationMessage();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard
        .writeText("katrusina.chitalna17@gmail.com")
        .then(() => {
          onShowing("Пошта скопійована до буферу обміну");
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <footer>
        <div className="footerWrapper">
          <div className="footerWrapperCover">
            <div className="footerContentWrapper">
              <h3>
                Зробіть передзамовлення
                <br />
                прямо зараз
              </h3>
              <button className="preorderButton" onClick={preorderModalOpen}>
                Передзамовити
              </button>

              <div className="footerInfo" id="contacts">
                <a
                  href="https://www.instagram.com/kateryna_hurtovaaa/?hl=uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram icon"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://t.me/kateryna_hurtovaaa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegramIcon} alt="Telegram icon" loading="lazy" />
                </a>
                <Tooltip text="Скопіювати адресу">
                  <button onClick={copyToClipboard}>
                    <img src={gmailIcon} alt="Telegram icon" loading="lazy" />
                  </button>
                </Tooltip>
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
                  <button onClick={onPrivacyModalOpen}>
                    Політика конфіденційності
                  </button>
                </li>
                <li>
                  <button onClick={onDeliveryModalOpen}>Доставка</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBottomAuthors">
            <p>
              Дизайн робила:{" "}
              <a
                href="https://www.instagram.com/_darialysenko?igsh=MWptY2J2Y3ZoYnpiMw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Daria Lysenko
              </a>
              ;
            </p>
            <p>
              Розробив сайт:{" "}
              <a
                href="https://www.linkedin.com/in/danylo-nabok"
                target="_blank"
                rel="noreferrer"
              >
                Danylo Nabok
              </a>
            </p>
          </div>
        </div>
      </footer>

      {preorderModal}
      {privacyModal}
      {deliveryModal}
      {informationMessage}
    </>
  );
};
