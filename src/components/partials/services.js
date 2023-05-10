import React from 'react';

import style from '../../styles/partials/services.module.css';
import { useTranslation } from 'react-i18next';

export default React.forwardRef(function ComponentServices(props,ref){
    const {t} = useTranslation();

    return (
        <section ref={ref.services} id="servicios" className={style.container}>
            <h2 className={style.title}>
                <span data-aos="fade-right" data-aos-duration="2000">
                    { t('servicios.title') }
                </span>
                <ion-icon name="book-outline" data-aos="fade-left" data-aos-duration="2000"></ion-icon>
            </h2>
            <h4 className={style.ofrezco} data-aos="fade-right" data-aos-duration="2500">
                { t('servicios.subtitle') }
            </h4>
            <article className={style.description} data-aos="fade-up" data-aos-duration="3000">
                <div className={style.item}>
                    <div className={style.icon} data-aos="fade-down" data-aos-duration="3000">
                        <i className='bx bx-spreadsheet bx-lg'></i>
                    </div>
                    <h3>
                        { t('servicios.item_1.txt_1') }
                    </h3>
                    <p>
                        { t('servicios.item_1.txt_2') }
                    </p>
                </div>
                <div className={style.item}>
                    <div className={style.icon} data-aos="fade-down" data-aos-duration="3000">
                        <ion-icon name="code-working-outline"></ion-icon>
                    </div>
                    <h3>
                        { t('servicios.item_2.txt_1') }
                    </h3>
                    <p>
                        { t('servicios.item_2.txt_2') }
                    </p>
                </div>
                <div className={style.item}>
                    <div className={style.icon} data-aos="fade-down" data-aos-duration="3000">
                        <i className='bx bxs-data bx-lg'></i>
                    </div>
                    <h3>
                        { t('servicios.item_3.txt_1') }
                    </h3>
                    <p>
                        { t('servicios.item_3.txt_2') }
                    </p>
                </div>
            </article>
        </section>
    )
})