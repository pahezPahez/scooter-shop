import React from "react";
import './Footer.css';
import telegramIcon from '../assets/icons/telegram-icon.svg';
import vkIcon from '../assets/icons/vk-icon.svg';

const Footer = () => {
    return (
        <footer id="contacts" className="footer">

            <div className="head">
                <a href="" className="title">ScooterShop</a>
                <p className="discr">Рождены творить и радовать</p>
            </div>

            <hr className="footer-hr" />

            <div className="bottom">
                <iframe src="https://yandex.ru/map-widget/v1/?ll=131.904834%2C43.124678&mode=poi&poi%5Bpoint%5D=131.905232%2C43.125458&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1033268555&z=17.6" width="860" height="350" frameborder="1" allowfullscreen="true" style={{ position: "relative", border: "none" }}></iframe>

                <div className="contact-cantainer">
                    <h3 className="contact">Связаться с нами:</h3>

                    <div className="box-contact">
                        <img className="telega" src={telegramIcon} alt="телеграмм" />
                        <a className="telega-teg" href="https://web.telegram.org/a/">@pahez_pahez</a>
                    </div>

                    <div className="box-contact">
                        <img className="vk" src={vkIcon} alt="ВК" />
                        <a className="vk-teg" href="https://vk.com/pahez_pahezzz">Pahez Pahez</a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;