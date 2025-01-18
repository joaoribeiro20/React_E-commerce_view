import React from 'react';
import styles from './aboutCoffe.module.scss';
import ImgAboutCoffe from '../../../assets/imgs/undraw_coffee_7r49.svg'

const AboutCoffe: React.FC = () => {
  return (
    <section className={styles.section_Main_Products}>
      <article className={styles.article_Main}>
        <h2><strong>About our Store</strong></h2>
        <p>Lorem ipsum integer in arcu curabitur suscipit rutrum aliquet quisque, viverra nec viverra vitae eget cubilia luct
          us curabitur egestas consectetur, phasellus massa aptent nullam interdum eget himenaeos felis. maecenas conse
          quat hendrerit gravida erat lectus sociosqu praesent, scelerisque potenti egestas aenean venenatis inceptos liber
          o erat, porta aptent nibh vehicula vitae et. luctus eget et non,
          Lorem ipsum integer in arcu curabitur suscipit rutrum aliquet quisque, viverra nec viverra vitae eget cubilia luct
          us curabitur egestas consectetur, phasellus massa aptent nullam interdum eget himenaeos felis. maecenas conse
          quat hendrerit gravida erat lectus sociosqu p non</p>
        <article className={styles.article_Main_Products}>
          <div className={styles.article_img}>
            <img src={ImgAboutCoffe} alt="" />
          </div>
          <div className={styles.context}>
            <p>Lorem ipsum integer in arcu curabitur suscipit rutrum aliquet quisque, viverra nec viverra vitae eget cubilia luct
              us curabitur egestas consectetur, phasellus massa aptent nullam interdum eget himenaeos felis. maecenas conse
              quat hendrerit gravida erat lectus sociosqu praesent, scelerisque potenti egestas aenean venenatis inceptos liber
              o erat, porta aptent nibh vehicula vitae et. luctus egr,</p>
            <div className={styles.button}>
              <a href="">Explore Other Menu</a>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default AboutCoffe;
