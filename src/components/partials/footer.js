import {Link} from 'react-scroll';
import style from '../../styles/partials/footer.module.css';

export default function ComponentFooter(){
    return (
        <section className={style.container}>
            <article className={style.description} data-aos="fade-down" data-aos-duration="3000">
                <div className={style.icon}>
                    <ion-icon name="cafe-outline"></ion-icon>
                </div>
                <div className={style.details}>
                    <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                        Alejo Beltran
                    </Link>
                    <h1>
                        beltrannicolasalejo@gmail.com
                    </h1>
                </div>
            </article>
        </section>
    )
}