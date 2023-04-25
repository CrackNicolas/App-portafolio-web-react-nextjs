import style from '../../../styles/partials/desktop/menu_left.module.css'

export default function ComponentMenuLeft(){
    return (
        <section className={style.menu}>
            <article className={style.items}>
                <div className={style.item}>
                    <div className={style.load_icon}></div>
                    <span className={style.load_text}></span>
                </div>
                <div className={style.item}>
                    <div className={style.load_icon}></div>
                    <span className={style.load_text}></span>
                </div>
                <div className={style.item}>
                    <div className={style.load_icon}></div>
                    <span className={style.load_text}></span>
                </div>
                <div className={style.item}>
                    <div className={style.load_icon}></div>
                    <span className={style.load_text}></span>
                </div>
            </article>
        </section>
    )
}