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
import line from '../../assets/imgs/Line.png'
import cupMain from '../../assets/imgs/cupHome.png'
import HeaderHome from '../../components/HeaderHome';
import CardProduct from '../../components/CardProduct';
import ProductCoffe from '../../assets/imgs/ProductCoffe.png';





const Home: React.FC = () => {

  return (
    <>
      <main
        className={styles.home}>
        <section><HeaderHome /></section>
        <section className={styles.main_Home}>
          <h1>Our<mark>Coffe</mark>.</h1>
          <img className={styles.imgTitle} src={line} alt="" />
          <div className={styles.home_context}>
            <div className={styles.context_body}>
              <p>	Lorem ipsum integer in arcu curabitur suscipit rutrum aliquet quisque, viverra nec viverra vitae
                eget cubilia luctus curabitur egestas consectetur,
                phasellus massa aptent nullam interdum eget himenaeos felis. maecenas cons
                equat hendrerit gravida erat lectus sociosqu
                praesent, scelerisque potenti egestas aenean venenatis inceptos libero erat, porta aptent nibh vehicula vitae et. .</p>
              <div className={styles.buttons_body}>
                <button className={styles.order} ><Link to="/Store"> Order</Link></button>
                <button className={styles.sign}><Link to="/Store"> Sign In</Link></button>
              </div>
            </div>
            <div className={styles.imgCup}>
              <img src={cupMain} alt="" />
            </div>
          </div>
        </section>
        <section ><AboutProduct /></section>
        <section ><AboutCoffe /></section>
        <section ><AboutSeller /></section>
        <section ><Footer />
        </section>
      </main>

    </>
  )
}

export default Home;