import style from '../../../styles/partials/desktop/menu_left.module.css'

export default function ComponentMenuLeft(){
    return (
        <section className={style.menu}>
            <article className={style.items}>
                <a href="#inicio" className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="easel-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Inicio
                    </span>
                </a>
                <a href="#sobre-mi" className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Sobre mi
                    </span>
                </a>
                <a href="#servicios" className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Servicios
                    </span>
                </a>
                <a href="#portfolio" className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="briefcase-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Portfolio
                    </span>
                </a>
                <a href="#educacion" className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="text-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Educación
                    </span>
                </a>
                <a href="#contactar" className={style.item}>
                    <div className={style.load_icon}>
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <span className={style.load_text}>
                        Contactar
                    </span>
                </a>
            </article>
        </section>
    )
}