import React from 'react';
import Header from '../../components/Header';
import styles from './home.module.scss';
import im from '../../assets/imgs/undraw_coffee_re_x35h.svg'
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import AboutProduct from '../../components/ContentsHome/AboutProduct';
import AboutCoffe from '../../components/ContentsHome/AboutCoffe';
import AboutSeller from '../../components/ContentsHome/AboutSeller';
import { Link } from 'react-router-dom';

//Imgs
import tittle from '../../assets/imgs/Tittle.png'
import cupMain from '../../assets/imgs/cupHome.png'





const Home: React.FC = () => {

  return (
    <>
      <main
        className={styles.home}>
        <section><Header /></section>
        <section className={styles.main_Home}>
          <img src={tittle} alt="" />
          <div>
            <div>
              <p>	Lorem ipsum integer in arcu curabitur suscipit rutrum aliquet quisque, viverra nec viverra vitae
                eget cubilia luctus curabitur egestas consectetur,
                phasellus massa aptent nullam interdum eget himenaeos felis. maecenas cons
                equat hendrerit gravida erat lectus sociosqu
                praesent, scelerisque potenti egestas aenean venenatis inceptos libero erat, porta aptent nibh vehicula vitae et. .</p>
                <div>
                  <button>Order</button>
                  <button>Sign In</button>
                </div>
            </div>
            <div><img src={cupMain} alt="" /></div>
          </div>
        </section>
        {/*  <section><AboutProduct /></section>
        <section><AboutCoffe /></section>
        <section><AboutSeller /></section> */}
        <section><Footer /></section>
      </main>

    </>
  )
}

export default Home;