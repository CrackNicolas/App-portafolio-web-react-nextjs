import style from '../../../styles/partials/desktop/inicio.module.css';
import { useTranslation } from 'react-i18next';

export default function ComponentInicio(){
    const {t} = useTranslation();

    return (
        <section id="inicio" className={style.container}>
            <article className={style.description}>
                <h2 className={style.hello}>
                    {
                        t('inicio.txt_1')
                    }
                </h2>
                <h1 className={style.name}>
                    Alejo Beltran
                </h1>
                <h4 className={style.specialist}>
                    Full Stack Development
                </h4>
                <p className={style.message}>
                    {
                        t('inicio.txt_2')
                    }
                </p>
                <div className={style.buttons}>
                    <a href="#contactar">
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        <span>
                            {
                                t('inicio.txt_3')
                            }
                        </span>
                    </a>
                    <a href="">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <span>
                            {
                                t('inicio.txt_4')
                            }
                        </span>
                    </a>
                </div>
            </article>
            <article className={style.perfil}>
                <img src="/images/perfil.jpg"/>
            </article>
        </section>
    )
}