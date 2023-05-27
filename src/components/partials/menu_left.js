import {Link} from 'react-scroll';
import style from '../../styles/partials/menu_left.module.css'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../i18n/en.json';
import es from '../../i18n/es.json';

export default function ComponentMenuLeft({inicio,sobre_mi,services,portfolio,educacion,contactar}){
    const [icon_selected,setIcon_selected] = useState("inicio");
    const [lenguaje_selected,setLenguage_selected] = useState(true);
    const {t} = useTranslation();

    useEffect(() => {
        const handle_scroll = () => {
            const {y : inicio_y} = inicio.current.getBoundingClientRect();
            const {y : sobre_mi_y} = sobre_mi.current.getBoundingClientRect();
            const {y : services_y} = services.current.getBoundingClientRect();
            const {y : portfolio_y} = portfolio.current.getBoundingClientRect();
            const {y : educacion_y} = educacion.current.getBoundingClientRect();
            const {y : contactar_y} = contactar.current.getBoundingClientRect();

            setIcon_selected( 
                (inicio_y<=0 && inicio_y>=-450)? "inicio" : 
                (sobre_mi_y<=250 && sobre_mi_y>=-600)? "sobre-mi" :
                (services_y<=300 && services_y>=-580)? "servicios" :
                (portfolio_y<=230 && portfolio_y>=-1470)? "portfolio" :
                (educacion_y<=172 && educacion_y>=-670)? "educacion" :
                (contactar_y<=242)? "contactar" : ""
            )
        }
        window.addEventListener('scroll',handle_scroll);

        return () => {
            window.removeEventListener('scroll',handle_scroll);
        }
    },[]);


    useEffect(() => {
        i18next.use(initReactI18next).init({
            lng : (lenguaje_selected)? "es":"en",
            interpolation : {
                escapeValue : false
            },
            resources : {
                en : {
                    translation : en
                },
                es : {
                    translation : es
                }
            }
        })
    },[lenguaje_selected]);

    const get_selected = (name_icon) => {
        return (icon_selected == name_icon)? { color : "var(--color-text-secondary)"} : {};
    }
    const get_selected_lenguaje = () => {
        return (lenguaje_selected)? "https://img.icons8.com/fluency/48/000000/argentina.png" : "https://img.icons8.com/fluency/48/000000/usa_1.png";
    }

    return (
        <section className={style.menu}>
            <article className={style.items}>
                <div>
                    <Link to="inicio" spy={true} smooth={true} offset={0} duration={500} style={get_selected("inicio")} className={style.item}>
                        <div className={style.load_icon}>
                            <ion-icon name={(icon_selected == "inicio")? "easel" : "easel-outline"}></ion-icon>
                        </div>
                        <span className={style.load_text} style={get_selected("inicio")}>{ t('menu.i_1') }</span>
                    </Link>
                    <Link to="sobre-mi" spy={true} smooth={true} offset={0} duration={500} style={get_selected("sobre-mi")} className={style.item}>
                        <div className={style.load_icon}>
                            <ion-icon name={(icon_selected == "sobre-mi")? "person" : "person-outline"}></ion-icon>
                        </div>
                        <span className={style.load_text} style={get_selected("sobre-mi")}>{ t('menu.i_2') }</span>
                    </Link>
                    <Link to="servicios" spy={true} smooth={true} offset={0} duration={500} style={get_selected("servicios")} className={style.item}>
                        <div className={style.load_icon}>
                            <ion-icon name={(icon_selected == "servicios")? "book" : "book-outline"}></ion-icon>
                        </div>
                        <span className={style.load_text} style={get_selected("servicios")}>{ t('menu.i_3') }</span>
                    </Link>
                    <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500} style={get_selected("portfolio")} className={style.item}>
                        <div className={style.load_icon}>
                            <ion-icon name={(icon_selected == "portfolio")? "briefcase" : "briefcase-outline"}></ion-icon>
                        </div>
                        <span className={style.load_text} style={get_selected("portfolio")}>{ t('menu.i_4') }</span>
                    </Link>
                    <Link to="educacion" spy={true} smooth={true} offset={0} duration={500} style={get_selected("educacion")} className={style.item}>
                        <div className={style.load_icon}>
                            <ion-icon name={(icon_selected == "educacion")? "text" : "text-outline"}></ion-icon>
                        </div>
                        <span className={style.load_text} style={get_selected("educacion")}> { t('menu.i_5') } </span>
                    </Link>
                    <Link to="contactar" spy={true} smooth={true} offset={0} duration={500} style={get_selected("contactar")} className={style.item}>
                        <div className={style.load_icon}>
                            <ion-icon name={(icon_selected == "contactar")? "mail" : "mail-outline"}></ion-icon>
                        </div>
                        <span className={style.load_text} style={get_selected("contactar")}>{ t('menu.i_6') }</span>
                    </Link>
                </div>
                <div>
                    <a className={style.item} onClick={() => setLenguage_selected(!lenguaje_selected)}>
                        <div className={style.load_lenguage}>
                            <img src={get_selected_lenguaje()}/>
                        </div>
                        <span className={style.load_text}>{ t('menu.i_7') }</span>
                    </a>
                </div>
            </article>
        </section>
    )
}