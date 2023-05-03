import { useTranslation } from 'react-i18next';
import style from '../../../styles/partials/desktop/contactar.module.css';

export default function ComponentContactar(){
    const {t} = useTranslation();

    return (
        <section id="contactar" className={style.container}>
            <h2 className={style.title}>
                <span>
                    {
                        t('inicio.txt_3')
                    }
                </span>
                <ion-icon name="mail-outline"></ion-icon>
            </h2>
            <article className={style.form}>
                <h2>
                    {
                        t('contact.subtitle')
                    }    
                </h2>
                <form action="" method="POST">
                    <div>
                        <input type="text" placeholder={t('contact.inputs.j_1')}></input>
                        <input type="text" placeholder={t('contact.inputs.j_2')}></input>
                    </div>
                    <input type="text" placeholder={t('contact.inputs.j_3')}></input>
                    <textarea type="text" placeholder={t('contact.inputs.j_4')}/>
                    <button type="submit">
                        <ion-icon name="send-outline"></ion-icon>
                        <span>
                            {
                                t('menu.i_6')
                            }
                        </span>
                    </button>
                </form>
            </article>
        </section>
    )
}