import style from '../../../styles/partials/desktop/sobre_mi.module.css';

export default function ComponentSobreMi(){
    return (
        <a id="sobre-mi" className={style.container}>
            <h2>Sobre mi</h2>
            <h4>¿Por qué me contratan?</h4>
            <p>
                Soy un profesional dedicado a la excelencia de mis proyectos, recomendando tecnologías y estrategias para cada caso.
                <br/>
                Mantenerme a la vanguardia es una de mis principales prioridades.
            </p>
        </a>
    )
}