import style from '../../../styles/partials/desktop/footer.module.css';

export default function ComponentFooter(){
    return (
        <section className={style.container}>
            <article className={style.description}>
                <div className={style.icon}>
                    <ion-icon name="cafe-outline"></ion-icon>
                </div>
                <div className={style.details}>
                    <h3>Alejo Beltran</h3>
                    <h1>beltrannicolasalejo@gmail.com</h1>
                </div>
            </article>
        </section>
    )
}