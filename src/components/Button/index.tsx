import React from 'react';
import styles from './button.module.scss';

interface Props {
  text: string,
  nameClass: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
}

const Buttons: React.FC<Props> = ({ text, type, onClick, nameClass }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.botao} ${nameClass}`}
    >
      {text}
    </button>
  );
}

export default Buttons;
