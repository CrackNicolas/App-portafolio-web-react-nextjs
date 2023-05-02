import style from '../../../styles/partials/desktop/contactar.module.css';

export default function ComponentContactar(){
    return (
        <section id="contactar" className={style.container}>
            <h2 className={style.title}>
                <span>
                    Contactame
                </span>
                <ion-icon name="mail-outline"></ion-icon>
            </h2>
            <article className={style.form}>
                <h2>Formulario de contacto</h2>
                <form action="" method="POST">
                    <div>
                        <input type="text" placeholder="Nombre..."></input>
                        <input type="text" placeholder="Apellido..."></input>
                    </div>
                    <input type="text" placeholder="Correo..."></input>
                    <textarea type="text" placeholder="Consulta..."/>
                    <button type="submit">
                        <ion-icon name="send-outline"></ion-icon>
                        <span>Contactar</span>
                    </button>
                </form>
            </article>
        </section>
    )
}