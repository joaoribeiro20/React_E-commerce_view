import React from 'react';
import styles from './aboutSeller.module.scss';
import ImgAboutSeller from '../../../assets/imgs/undraw_barista_ltfh.svg'

const AboutSeller: React.FC = () => {
  return (
    <>
      <section className={styles.section_main}>
        <article className={styles.article_texts}>
          <div>
            <h2>Become a salesperson</h2>
            <h3>Bring your coffee to sell in our store</h3>

            <p>Lorem ipsum integer in arcu curabitur suscipit rutrum aliquet quisque, viverra nec viverra vitae eget cubilia luct
              us curabitur egestas consectetur, phasellus massa aptent nullam interdum eget himenaeos felis. maecenas conse
              quat hendrerit gravida erat lectus sociosqu praesent, scelerisque potenti egestas aenean venenatis inceptos liber
              o erat, porta aptent nibh vehicula vitae et. luctus eget et non</p>
            <a className={styles.bts} href="">Explore Other Menu</a>
          </div>

          <div><img src={ImgAboutSeller} alt="" /> </div>
        </article>
      </section>
    </>
  );
}

export default AboutSeller;