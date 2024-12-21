import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.infoMain}>
          <article className={styles.listInfos}>
            <p className={styles.titles}><strong>Products</strong></p>
            <hr className={styles.linha} />
            <Link to={'/'}>teste 1 </Link>
            <Link to={'/'}>teste 2 </Link>
            <Link to={'/'}>teste 3 </Link>
          </article>
          <article className={styles.listInfos}>
            <p className={styles.titles}><strong>About Us</strong></p>
            <hr className={styles.linha} />
            <Link to={'/'}>teste 1 </Link>
            <Link to={'/'}>teste 2 </Link>
          </article>
          <article className={styles.listInfos}>
            <p className={styles.titles}><strong>More from  Coffe.j</strong></p>
            <hr className={styles.linha} />
            <Link to={'/'}>teste 1 </Link>
            <Link to={'/'}>teste 2 </Link>
            <Link to={'/'}>teste 3 </Link>
            <Link to={'/'}>teste 4 </Link>
            <Link to={'/'}>teste 5 </Link>
          </article>
        </section>
        <section className={styles.contactMain}>
          <article className={styles.infoEmail}>
            <p className={styles.titles}><strong>Let´S Stay Connected</strong></p>
            <p> enter your email to unlock 10% OFF.</p>
            <input type="email" /><button>SUBMIT</button>
            <hr />
          </article>
          <article className={styles.infoRedes}>
            <p className={styles.titles}><strong>Follow us</strong></p>
            <div>
              <p>Insta</p>
              <p>Whapp</p>
              <p>Linkedin</p>
              <p>blog</p>
            </div>
          </article>
        </section>
      </footer>

    </>
  );
}

export default Footer;