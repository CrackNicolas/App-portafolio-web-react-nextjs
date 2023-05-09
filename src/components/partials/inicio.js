import React from 'react';

import style from '../../styles/partials/inicio.module.css';
import { useTranslation } from 'react-i18next';

export default React.forwardRef(function ComponentInicio(props,ref){
    const {t} = useTranslation();

    return (
        <section ref={ref.inicio} id="inicio" className={style.container}>
            <article className={style.description}>
                <h2 className={style.hello}>
                    { t('inicio.txt_1') }
                </h2>
                <h1 className={style.name}>
                    Alejo Beltran
                </h1>
                <h4 className={style.specialist}>
                    Full Stack Development
                </h4>
                <p className={style.message}>
                    { t('inicio.txt_2') }
                </p>
                <div className={style.buttons}>
                    <a href="#contactar">
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        <span>{ t('inicio.txt_3') }</span>
                    </a>
                    <a href="">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <span>{ t('inicio.txt_4') }</span>
                    </a>
                </div>
            </article>
            <article className={style.perfil}>
                <img src="/images/perfil.jpg"/>
            </article>
        </section>
    )
})