import React, { useEffect, useState } from 'react';
import style  from './store.module.scss';
import Header from '../../components/Header';
import jarCoffe from '../../assets/imgs/JarCoffe.png'
import imgProduct from '../../assets/imgs/ProductCoffe.png'
import CardProduct from '../../components/CardProduct';
import pd from './products.json';
import iconSeache from '../../assets/imgs/iconHome.png'


interface Product {
  titulo: string;
  descricao: string;
  imagem: string;
  valor: number;
}

// Definindo o componente funcional
const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Estado para armazenar os produtos
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento

  useEffect(() => {
    
    // Simula uma requisição para API local
    const fetchProducts = async () => {
     
      try {
        setProducts(pd); // Atualiza o estado com os dados do JSON
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Define o carregamento como concluído
      }
       
    };

    fetchProducts();
  }, []);

  return (
    <>
    <Header/>
    <section className={style.container_main}>
    <article className={style.container_main_info}>
      <div className={style.container_info}>
        <h2>Our Store</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio amet nulla accusamus quo dicta quis provident ab animi enim. At provident vero fugiat tenetur delectus! Facere distinctio dolorem atque?</p>
      </div>
      <div className={style.container_img}>
        <img src={jarCoffe} alt="" />
      </div>
    </article>
    <article className={style.container_main_inputs}>
      
      <div className={ `${style.container_input} ${style.search}`}>
        <label htmlFor="">Search</label>
        <div className={style.search_input}>
        <input 
        type="text" 
        placeholder='Search...'
        color='white'
        />
        <button><img src={iconSeache} alt="aaa" /></button>
        </div>
        
      </div>
      
      <div className={style.container_input}>
        <label htmlFor="">Price</label>
        <input type="text" />
      </div>

      <div className={style.container_input}>
        <label htmlFor="">Seller</label>
        <input type="text" />
      </div>

      <div className={style.container_input}>
        <label htmlFor="">Type</label>
        <input type="text" />
      </div>
    </article>
    </section>
      

    <section className={style.products}>
        {loading ? ( // Exibe carregamento enquanto os dados estão sendo buscados
          <p>Loading products...</p>
        ) : (
          products.map((product, index) => (
            <CardProduct
              key={index} 
              titulo={product.titulo}
              descricao={product.descricao}
              imagem={imgProduct}
              valor={product.valor}
            />
          ))
        )}
      </section>

      <button>Load More</button>
    </>
  );
};

export default Store;