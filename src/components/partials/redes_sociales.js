import style from '../../styles/partials/redes_sociales.module.css';

export default function ComponentRedesSociales(){
    return (
        <section className={style.menu}>
            <article className={style.items}>
                <a target="_blank" href="https://www.linkedin.com/in/nicolas-alejo-beltran/" className={style.item}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=new" className={style.item}>
                    <ion-icon name="mail-open-outline"></ion-icon>
                </a>
                <div className={style.line}>-</div>
                <div className={style.line}>-</div>
            </article>
        </section>
    )
}