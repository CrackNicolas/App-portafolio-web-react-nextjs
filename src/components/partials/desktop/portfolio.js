import style from '../../../styles/partials/desktop/portfolio.module.css';

export default function ComponentPortfolio(){
    return (
        <a id="portfolio" className={style.container}>
            <h2 className={style.title}>
                <span>
                    Portfolio
                </span>
                <ion-icon name="briefcase-outline"></ion-icon>
            </h2>
            <h3 className={style.subtitle}>Ultimos proyectos</h3>
            <article className={style.proyect}>
                <div className={style.card}>
                    <img src="/images/youtube.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/pinterest.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/quizz.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/QA.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/Parser.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/Clasical_model.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/Juego_pong.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/Analizador_lexico.png"/>
                </div>
                <div className={style.card}>
                    <img src="/images/editorial.png"/>
                </div>
            </article>
        </a>
    )
}