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
        </a>
    )
}