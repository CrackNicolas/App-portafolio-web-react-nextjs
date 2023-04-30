import style from '../../../styles/partials/desktop/educacion.module.css';

export default function ComponentEducacion(){
    return (
        <a id="educacion" className={style.container}>
            <h2 className={style.title}>
                <span>
                    Educación
                </span>
                <ion-icon name="text-outline"></ion-icon>
            </h2>
            <h3 className={style.subtitle}>Estudios realizados</h3>
            <article className={style.description}>
                <div className={style.item}>
                    <div className={style.data}>
                        <ion-icon name="school-outline"></ion-icon>
                        <div>
                            <h3>Vue.Js</h3>
                            <h4>Udemy</h4>
                            <h5>En curso...</h5>
                        </div>
                    </div>
                    <div className={style.details}>
                        <p>
                            Institucion Argentina Programa
                            Carrera : Full Stack Developer
                            Tiempo transcurrido desde 2021-04-01 hasta 2023-01-01
                            Tecnologias usadas, Angular, JavaScript, HTML5, CSS3, Bootstrap, Java con Spring Boot, POO, MySql, Integración continua y entrega continua (CI/CD), Docker, Clever cloud, Hostings como Render, Firebase, Heroku.
                        </p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data}>
                        <ion-icon name="school-outline"></ion-icon>
                        <div>
                            <h3>Vue.Js</h3>
                            <h4>Udemy</h4>
                            <h5>En curso...</h5>
                        </div>
                    </div>
                    <div className={style.details}>
                        <p>
                            Institucion Argentina Programa
                            Carrera : Full Stack Developer
                            Tiempo transcurrido desde 2021-04-01 hasta 2023-01-01
                            Tecnologias usadas, Angular, JavaScript, HTML5, CSS3, Bootstrap, Java con Spring Boot, POO, MySql, Integración continua y entrega continua (CI/CD), Docker, Clever cloud, Hostings como Render, Firebase, Heroku.
                        </p>    
                    </div>
                </div>
            </article>
        </a>
    )
}