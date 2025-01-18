import React from 'react';
import im from '../../assets/imgs/CupCoffe2.png'
import iconHome from '../../assets/imgs/iconHome.png'
import bagIcon from '../../assets/imgs/BagIcon.png'
import SearchIcon from '../../assets/imgs/SearchIcon.png'
import MenuIcon from '../../assets/imgs/MenuIcon.png'
import  style  from './headerHome.module.scss';
import { Link } from 'react-router-dom';

const HeaderHome: React.FC = () => {
  return (
    <>
    <header className={style.headerHome}>
      <section className={style.div_img}>
      <img src={im} alt="Logo" />
      <h3>OurCoffe.</h3>
      </section>

      <section className={style.div_Links}>
        <Link to="/Store"> <img src={iconHome} alt="" /></Link>
        <Link to="/Store"> <img src={bagIcon} alt="" /></Link>
        <Link to="/Store"> <img src={SearchIcon} alt="" /></Link>
      </section>

      <section className={style.div_menu}>
      <a href=""><img src={MenuIcon} alt="" /></a>
      </section>
     
    </header>
    </>
  );
}

export default HeaderHome;