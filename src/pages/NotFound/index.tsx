import React from 'react';
import styles from './notFound.module.scss'
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.div_main}>
                <button onClick={()=> navigate(-1)}>
                    {'< Voltar'}
                </button>
       
            </div>
        </>
    );
}

export default NotFound;