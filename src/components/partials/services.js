import style from '../../styles/partials/services.module.css';

import { useTranslation } from 'react-i18next';

export default function ComponentServices(){
    const {t} = useTranslation();

    return (
        <section id="servicios" className={style.container}>
            <h2 className={style.title}>
                <span>
                    {
                        t('servicios.title')
                    }
                </span>
                <ion-icon name="book-outline"></ion-icon>
            </h2>
            <h4 className={style.ofrezco}>
                {
                    t('servicios.subtitle')
                }
            </h4>
            <article className={style.description}>
                <div className={style.item}>
                    <div className={style.icon}>
                        <i className='bx bx-spreadsheet bx-lg'></i>
                    </div>
                    <h3>
                        {
                            t('servicios.item_1.txt_1')
                        }
                    </h3>
                    <p>
                        {
                            t('servicios.item_1.txt_2')
                        }
                    </p>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <ion-icon name="code-working-outline"></ion-icon>
                    </div>
                    <h3>
                        {
                            t('servicios.item_2.txt_1')
                        }
                    </h3>
                    <p>
                        {
                            t('servicios.item_2.txt_2')
                        }
                    </p>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <i className='bx bxs-data bx-lg'></i>
                    </div>
                    <h3>
                        {
                            t('servicios.item_3.txt_1')
                        }
                    </h3>
                    <p>
                        {
                            t('servicios.item_3.txt_2')
                        }
                    </p>
                </div>
            </article>
        </section>
    )
}