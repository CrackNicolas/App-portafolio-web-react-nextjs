import { useEffect } from 'react';
import style from '../../../styles/partials/desktop/inicio.module.css';
import { useTranslation } from 'react-i18next';

export default function ComponentInicio(){
    const {t} = useTranslation();

    return (
        <section id="inicio" className={style.container}>
            <article className={style.description}>
                <h2 className={style.hello}>
                    {
                        t('test')
                    }
                </h2>
                <h1 className={style.name}>
                    Alejo Beltran
                </h1>
                <h4 className={style.specialist}>
                    Full Stack Development
                </h4>
                <p className={style.message}>
                    Actualmente, estoy en la búsqueda de una empresa que me permita crecer como desarrollador y colaborar en proyectos desafiantes.
                </p>
                <div className={style.buttons}>
                    <a href="#contactar">
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        <span>Contactame</span>
                    </a>
                    <a href="">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <span>Descargar CV</span>
                    </a>
                </div>
            </article>
            <article className={style.perfil}>
                <img src="/images/perfil.jpg"/>
            </article>
        </section>
    )
}