import {Link} from 'react-scroll';
import style from '../../styles/partials/footer.module.css';

export default function ComponentFooter(){
    return (
        <section className={style.container}>
            <article className={style.description}>
                <div className={style.icon} data-aos="fade-down" data-aos-duration="3000">
                    <ion-icon name="cafe-outline"></ion-icon>
                </div>
                <div className={style.details} data-aos="fade-down" data-aos-duration="2000">
                    <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                        Alejo Beltran
                    </Link>
                    <h1 data-aos="fade-down" data-aos-duration="1000">
                        beltrannicolasalejo@gmail.com
                    </h1>
                </div>
            </article>
        </section>
    )
}