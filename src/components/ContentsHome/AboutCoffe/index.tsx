import React from 'react';
import styles from './aboutCoffe.module.scss';
import ImgAboutCoffe from '../../../assets/imgs/undraw_barista_ltfh.svg'

const AboutCoffe: React.FC = () => {
  return (
    <section className={styles.section_Main_Products}>
      <img src={ImgAboutCoffe}  alt="" />
    </section>
  );
}

export default AboutCoffe;
