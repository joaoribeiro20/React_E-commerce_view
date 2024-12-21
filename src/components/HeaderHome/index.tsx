import React from 'react';
import im from '../../assets/imgs/Logo1.png'
import  style  from './header.module.scss';


// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
    <header className={style.header}>
      <section>
      <img src={im} alt="Logo" style={{ width: '50px', height: '35px'}} />
      </section>

      <section className={style.div_Links}>

      </section>
    </header>
    </>
  );
}

export default Header;