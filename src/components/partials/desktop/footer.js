import {Link} from 'react-scroll';
import style from '../../../styles/partials/desktop/footer.module.css';

export default function ComponentFooter(){
    return (
        <section className={style.container}>
            <article className={style.description}>
                <div className={style.icon}>
                    <ion-icon name="cafe-outline"></ion-icon>
                </div>
                <div className={style.details}>
                    <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                        Alejo Beltran
                    </Link>
                    <h1>beltrannicolasalejo@gmail.com</h1>
                </div>
            </article>
        </section>
    )
}