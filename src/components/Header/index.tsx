import React from 'react';
import im from '../../assets/imgs/Logo1.png'
import  style  from './header.module.scss';
import cupHeader from '../../assets/imgs/CupCoffe2.png'

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
    <header className={style.header}>
      <section>

      </section>

      <section className={style.div_Links}>
      <img src={cupHeader}  alt="" />
      </section>
    </header>
    </>
  );
}

export default Header;