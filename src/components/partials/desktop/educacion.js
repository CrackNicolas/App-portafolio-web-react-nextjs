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
        </a>
    )
}