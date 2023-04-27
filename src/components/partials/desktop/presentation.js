import style from '../../../styles/partials/desktop/presentation.module.css';

export default function ComponentPresentation(){
    return (
        <section className={style.container}>
            <article className={style.description}>
                <h2 className={style.hello}>
                    Hola soy
                </h2>
                <h1 className={style.name}>
                    Alejo Beltran
                </h1>
                <h4 className={style.specialist}>
                    Full Stack Development
                </h4>
                <p className={style.message}>
                    Actualmente, estoy en la búsqueda de una empresa que me permita crecer como desarrollador y colaborar en proyectos desafiantes.
                </p>
                <div className={style.buttons}>
                    <a href="">
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        <span>
                            Contactame
                        </span>
                    </a>
                    <a href="">
                        <span>
                            Descargar CV
                        </span>
                        <ion-icon name="document-text-outline"></ion-icon>
                    </a>
                </div>
            </article>
            <article className={style.perfil}>
                <img src="/images/perfil.jpg"/>
            </article>
        </section>
    )
}