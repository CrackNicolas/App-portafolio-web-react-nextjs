import React from 'react';

import { useRef, useState } from 'react';
import style from '../../styles/partials/educacion.module.css';
import { useTranslation } from 'react-i18next';

export default React.forwardRef(function ComponentEducacion(props,ref){
    const {t} = useTranslation();

    const [name_button,setName_button] = useState("Ver más");
    const description_education = useRef();

    const view_description = () => {
        setName_button( (description_education.current.style.height == 'auto')? 'button_view.txt_1' : 'button_view.txt_2' );
        description_education.current.style.height = (description_education.current.style.height == 'auto')? "520px" : "auto";
    }

    return (
        <section ref={ref.educacion} id="educacion" className={style.container}>
            <h2 className={style.title}>
                <span data-aos="fade-right" data-aos-duration="2000">
                    { t('education.title') }
                </span>
                <ion-icon name="text-outline" data-aos="fade-left" data-aos-duration="2000"></ion-icon>
            </h2>
            <h3 className={style.subtitle} data-aos="fade-right" data-aos-duration="2500">
                { t('education.subtitle') }
            </h3>
            <article className={style.description} ref={description_education}>
                <div className={style.item}>
                    <div className={style.data} data-aos="fade-right" data-aos-duration="3000">
                        <ion-icon name="school-outline"></ion-icon>
                        <div>
                            <h3>
                                { t('education.data.item_1.title') }
                            </h3>
                            <h4>
                                { t('education.data.item_1.subtitle') }
                            </h4>
                            <h5>
                                { t('education.data.item_1.status') }
                            </h5>
                        </div>
                    </div>
                    <div className={style.details} data-aos="fade-left" data-aos-duration="3000">
                        <p>
                            { t('education.data.item_1.description.txt_1') }
                            <br/>
                            { t('education.data.item_1.description.txt_2') }
                        </p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data} data-aos="fade-right" data-aos-duration="3000">
                        <ion-icon name="terminal-outline"></ion-icon>
                        <div>
                            <h3>
                                { t('education.data.item_2.title') }
                            </h3>
                            <h4>
                                { t('education.data.item_2.subtitle') }
                            </h4>
                            <h5>
                                { t('education.data.item_2.status') }
                            </h5>
                        </div>
                    </div>
                    <div className={style.details} data-aos="fade-left" data-aos-duration="3000">
                        <p>
                            { t('education.data.item_2.description.txt_1') }
                            <br/>
                            { t('education.data.item_2.description.txt_2') }
                        </p>  
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data} data-aos="fade-right" data-aos-duration="3000">
                        <ion-icon name="logo-react"></ion-icon>
                        <div>
                            <h3>
                                { t('education.data.item_3.title') }
                            </h3>
                            <h4>
                                { t('education.data.item_3.subtitle') }
                            </h4>
                            <h5>
                                { t('education.data.item_3.status') }
                            </h5>
                        </div>
                    </div>
                    <div className={style.details} data-aos="fade-left" data-aos-duration="3000">
                        <p>
                            { t('education.data.item_3.description.txt_1') }
                            <br/>
                            { t('education.data.item_3.description.txt_2') }
                        </p>  
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data} data-aos="fade-right" data-aos-duration="3000">
                        <ion-icon name="triangle"></ion-icon>
                        <div>
                            <h3>
                                { t('education.data.item_4.title') }
                            </h3>
                            <h4>
                                { t('education.data.item_4.subtitle') }
                            </h4>
                            <h5>
                                { t('education.data.item_4.status') }
                            </h5>
                        </div>
                    </div>
                    <div className={style.details} data-aos="fade-left" data-aos-duration="3000">
                        <p>
                            { t('education.data.item_4.description.txt_1') }
                            <br/>
                            { t('education.data.item_4.description.txt_2') }
                        </p> 
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data} data-aos="fade-right" data-aos-duration="3000">
                        <ion-icon name="logo-javascript"></ion-icon>
                        <div>
                            <h3>
                                { t('education.data.item_5.title') }
                            </h3>
                            <h4>
                                { t('education.data.item_5.subtitle') }
                            </h4>
                            <h5>
                                { t('education.data.item_5.status') }
                            </h5>
                        </div>
                    </div>
                    <div className={style.details} data-aos="fade-left" data-aos-duration="3000">
                        <p>
                            { t('education.data.item_5.description.txt_1') }
                            <br/>
                            { t('education.data.item_5.description.txt_2') }
                        </p> 
                    </div>
                </div>
            </article>
            <button onClick={() => view_description()} data-aos="fade-up" data-aos-duration="3000">
                <span>{ t(name_button) }</span>
                <ion-icon name={(name_button == "button_view.txt_1")? "chevron-down-outline" : "chevron-up-outline" }></ion-icon>
            </button>
        </section>
    )
})