import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <h2>Our Location</h2>
        </div>
        <div>
          <p>Jl. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124</p>
          <p>Customer Service +6282-2876-6862</p>
          <p>We Are Open from Sun - Mon 10 AM - 22 PM</p>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <div>redes sociais</div>
          <div>Delivery Order</div>
        </div>
        <div>
          <p>© 2023 OurCoffe, All rights reserved</p>
          <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a>
        </div>
      </footer>

    </>
  );
}

export default Footer;