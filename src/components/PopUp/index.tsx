import React from 'react';
import style from './popUp.module.scss'
import { CiCircleCheck } from "react-icons/ci";

const PopUp: React.FC = () => {
    return (
        <>
            <article className={style.main}>
            <div className={style.areaRedonda}></div>
                <div className={style.areaVerde}>
                    <CiCircleCheck size='100px'  className={style.icons} />
                    
                </div>
                <div className={style.areaInfo}>
                    <h2>Successful!!</h2>
                    <p>You have completed the setup</p>
                    <div>
                        <button className={style.btn}>continue</button>
                    </div>
                </div>

            </article>
        </>
    );
}

export default PopUp;