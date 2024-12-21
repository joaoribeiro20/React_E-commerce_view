import React from 'react';
import styles from './aboutSeller.module.scss';
import ImgAboutSeller from '../../../assets/imgs/undraw_coffee_7r49.svg'

const AboutSeller: React.FC = () => {
  return (
    <>
      <section className={styles.section_main}>
      <img src={ImgAboutSeller}  alt="" /> 
      </section>
    </>
  );
}

export default AboutSeller;