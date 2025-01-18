import CardProduct from "../../CardProduct";
import  styles  from "./aboutProduct.module.scss";
import ProductCoffe from '../../../assets/imgs/ProductCoffe.png';
function AboutPorduct() {
  
  return (
    <section className={styles.section_main}>
      <section className={styles.section_details}>
        <h2>Find your Favorite Coffee.</h2>

        <button>Explore Other Menu</button>
      </section>
      <section className={styles.section_product}>
                <CardProduct 
                imagem={ProductCoffe}
                titulo='Cafe teste'
                descricao='Corra clra e aroas citricos'
                valor={50}/>
                <CardProduct 
                imagem={ProductCoffe}
                titulo='Cafe teste'
                descricao='Corra clra e aroas citricos'
                valor={50}/>
                <CardProduct 
                imagem={ProductCoffe}
                titulo='Cafe teste'
                descricao='Corra clra e aroas citricos'
                valor={50}/>
      </section>
    </section>
  );
}

export default AboutPorduct;