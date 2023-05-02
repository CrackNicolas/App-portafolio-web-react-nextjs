import style from '../../../styles/partials/desktop/services.module.css';

export default function ComponentServices(){
    return (
        <section id="servicios" className={style.container}>
            <h2 className={style.title}>
                <span>
                    Servicios
                </span>
                <ion-icon name="book-outline"></ion-icon>
            </h2>
            <h4 className={style.ofrezco}>Servicios que ofrezco</h4>
            <article className={style.description}>
                <div className={style.item}>
                    <div className={style.icon}>
                        <i className='bx bx-spreadsheet bx-lg'></i>
                    </div>
                    <h3>Diseño Web</h3>
                    <p>Realizo maquetados web basándome en resultados de diseñadores gráficos, implementando herramientas de diseño profesional como Photoshop, Ilustrator y Lightroom.</p>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <ion-icon name="code-working-outline"></ion-icon>
                    </div>
                    <h3>Programacion Especifica</h3>
                    <p>Soluciones personalizadas para necesidades más complejas y puntuales.</p>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <i className='bx bxs-data bx-lg'></i>
                    </div>
                    <h3>Bases de datos</h3>
                    <p>Realizo implementaciones de bases de datos junto al desarrollo de aplicaciones en plataformas como MySQL, Microsoft SQL Server y MongoDB.</p>
                </div>
            </article>
        </section>
    )
}