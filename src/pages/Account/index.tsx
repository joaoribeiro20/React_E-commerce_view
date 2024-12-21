import React from 'react';
import style from './account.module.scss'

const Account: React.FC = () => {
    return (
        <>
        <section className={style.sectionMain}>
          <article className={style.articleImg}>
            <img src="" alt="sla" />
          </article>
          <article className={style.articleBtns}>
            <div>
                <h2>Get Started</h2>
            </div>
              <div className={style.divBtns}>
                
                <button className={style.btn}>Sign up</button>
                <button className={style.btn}>Login in</button>
              </div>
          </article>
        </section>
        </>
        )
}

export default Account;