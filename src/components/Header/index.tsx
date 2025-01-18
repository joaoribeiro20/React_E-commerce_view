import React from 'react';
import im from '../../assets/imgs/Logo1.png'
import  style  from './header.module.scss';
import cupHeader from '../../assets/imgs/CupCoffe2.png'
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
    <header className={style.header}>
      <section>
      <h3 className={style.log}>Our<strong>Coffe</strong>.</h3>
      </section>

      <section className={style.div_Links}>
        <Link to="/">Home</Link>
        <Link  to="/">Blog</Link>
        <Link className={`${style.btns} ${style.cart}`} to="/">Cart (0) </Link>
        <Link  className={style.btns}  to="/">Sign in</Link>
      </section>
    </header>
    </>
  );
}

export default Header;