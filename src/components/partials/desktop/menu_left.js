import {Link} from 'react-scroll';
import style from '../../../styles/partials/desktop/menu_left.module.css'

export default function ComponentMenuLeft(){
    return (
        <section className={style.menu}>
            <article className={style.items}>
                <Link to="inicio" spy={true} smooth={true} offset={0} duration={500} className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="easel-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Inicio
                    </span>
                </Link>
                <Link to="sobre-mi" spy={true} smooth={true} offset={0} duration={500} className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Sobre mí
                    </span>
                </Link>
                <Link to="servicios" spy={true} smooth={true} offset={0} duration={500} className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Servicios
                    </span>
                </Link>
                <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500} className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="briefcase-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Portfolio
                    </span>
                </Link>
                <Link to="educacion" spy={true} smooth={true} offset={0} duration={500} className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="text-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Educación
                    </span>
                </Link>
                <Link to="contactar" spy={true} smooth={true} offset={0} duration={500} className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Contactar
                    </span>
                </Link>
            </article>
        </section>
    )
}