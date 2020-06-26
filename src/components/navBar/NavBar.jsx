import React from 'react';
import styles from './NavBar.module.scss';
import {ReactComponent as Instagram} from './../../img/instagramLogo.svg'
import {NavLink} from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navBar__upperBlock}>
          <i className="material-icons" onClick={() => {
            props.menuClickHandle()
          }}>{props.showNavBar ? "keyboard_arrow_right" : "keyboard_arrow_left"}</i>
          <NavLink to="/aqualab" className={styles.navLink}>
            <div className={styles.home}>a</div>
          </NavLink>
          <i className="material-icons"><a href="tel:+375293916645">call</a></i>
          <NavLink to="/callback"><i className="material-icons">phone_iphone</i></NavLink>
          <NavLink to="/price"><i className="material-icons">monetization_on</i></NavLink>
          <i className="material-icons">payment</i>
          <NavLink to="/gift"><i className="material-icons">card_giftcard</i></NavLink>
          <NavLink to="/map"><i className="material-icons">room</i></NavLink>
        </div>
        <div className={styles.navBar__lowerBlock}>
          <a href="https://www.instagram.com/aqualab_minsk/" target="_blank">
            <Instagram className={styles.instagramIcon}/>
          </a>
        </div>
        <div className={styles.toggle} onClick={props.logoToggleHandle}>
          {props.logoNeon ?
            <i className="material-icons">toggle_on</i>
            :
            <i className="material-icons">toggle_off</i>
          }
        </div>
        <div className={styles.copyRights}>
          <i className="material-icons">copyright</i>
        </div>
      </div>
      <div className={`${styles.navBarExtension} ${props.showNavBar && styles.navBarExtensionHide}`}>
        <div className={styles.navBarExtension__upperBlock}>
          <div>Меню</div>
          <div>Главная</div>
          <div>Позвонить</div>
          <div>Перезвонить</div>
          <div>Price</div>
          <div>Плати онлайн</div>
          <div>Сертификат</div>
          <div>Карта</div>
        </div>
        <div className={styles.navBarExtension__lowerBlock}>
          <div>Instagram</div>
          <div className={styles.neon}>Neon</div>
        </div>
        <div className={styles.navBarExtension__copyRights}>
          All rights reserved
        </div>
      </div>
    </>
  );
}

export default NavBar;