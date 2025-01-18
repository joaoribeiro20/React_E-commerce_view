import React from 'react';
import styles from './cardProduct.module.scss'
import plus from '../../assets/imgs/plus.png'

interface CardProductProps {
  titulo: string;
  descricao: string;
  imagem: string;
  valor: number;
}

const CardProduct: React.FC<CardProductProps> = (props) => {
  const { titulo, descricao, imagem, valor } = props;

  return (
    <div className={styles.cardProduct}>
      <img src={imagem} alt={titulo} className={styles.cardProductImage} />
      <h2 className={styles.cardProductTitle}>{titulo}</h2>
      <p className={styles.cardProductDescription}>{descricao}</p>
      <div className={styles.cardProductValue}>
      <p>R$ {valor.toFixed(2)}</p>
      <a href=""><img src={plus} alt="" /></a>
      </div>
      
    </div>
  );
};

export default CardProduct;