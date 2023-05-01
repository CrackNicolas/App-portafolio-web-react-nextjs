import { useRef, useState } from 'react';
import style from '../../../styles/partials/desktop/educacion.module.css';

export default function ComponentEducacion(){
    const [name_button,setName_button] = useState("Ver más");
    const button = useRef();

    const view_description = () => {
        setName_button( (button.current.style.height == 'auto')? "Ver más" : "Ver menos");
        button.current.style.height = (button.current.style.height == 'auto')? "520px" : "auto";
    }

    return (
        <a id="educacion" className={style.container}>
            <h2 className={style.title}>
                <span>
                    Educación
                </span>
                <ion-icon name="text-outline"></ion-icon>
            </h2>
            <h3 className={style.subtitle}>Estudios realizados</h3>
            <article className={style.description} ref={button}>
                <div className={style.item}>
                    <div className={style.data}>
                        <ion-icon name="school-outline"></ion-icon>
                        <div>
                            <h3>ISI</h3>
                            <h4>UTN</h4>
                            <h5>En curso...</h5>
                        </div>
                    </div>
                    <div className={style.details}>
                        <p>
                            Carrera Ingeniería en Sistemas de Información, 
                            Estudiante avanzado y becario, en esta carrera logré fortificar las bases de la programación implementando soluciones tecnológicas en casos prácticos reales con distintos lenguajes de programación, diversas metodologías y técnicas.
                            <br/>
                            Tecnologías aplicadas: JavaScript, HTML, CSS, Bootstrap, Tailwind, C/C++, Java, Haskell, Prolog, MySql, Arduino, Git, GitHub. Linux, Node.js, npm, Unit Testing con Jest, IDE Apache NetBeans 8.1/14.0, Dev c++, editor de codigo Visual Stude Code.
                        </p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data}>
                        <ion-icon name="terminal-outline"></ion-icon>
                        <div>
                            <h3>YoProgramo</h3>
                            <h4>Arg.Programa</h4>
                            <h5>Abril 2021 - Febrero 2023</h5>
                        </div>
                    </div>
                    <div className={style.details}>
                        <p>
                            En este curso desarrollé todos los conocimientos que debe tener un Full Stack Developer para llevar a cabo cualquier aplicación sin problemas.
                            <br/>
                            Tecnologías aplicadas: Angular, JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Java con Spring Boot, POO, MySql, Integración continua y entrega continua (CI/CD), Docker, Clever cloud, Hostings como Render, Firebase, Heroku.
                        </p>    
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data}>
                        <ion-icon name="logo-react"></ion-icon>
                        <div>
                            <h3>React.js</h3>
                            <h4>Coder House</h4>
                            <h5>Junio 2022 - Agosto 2022</h5>
                        </div>
                    </div>
                    <div className={style.details}>
                        <p>
                            En este curso desarrollé soluciones en React.js siendo este el framework para JavaScript más usado actualmente que nos permite desarrollar aplicaciones web en el frontend (SPA, single page applications), principalmente implemente: variables, jsx, vistas, componentes, estados, hooks, estructuras de control, listas y mucho mas.
                            <br/>
                            Tecnologías aplicadas: JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Tailwind, MongoDB, Firebase.
                        </p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data}>
                        <ion-icon name="triangle"></ion-icon>
                        <div>
                            <h3>Next.js</h3>
                            <h4>midulive</h4>
                            <h5>Enero 2023 - Febrero 2023</h5>
                        </div>
                    </div>
                    <div className={style.details}>
                        <p>
                            En este curso desarrollé soluciones en Next.js usando todo lo aprendido de React.js, uno de los proyectos que realize con este framework de React.js fue este portafolio.
                            <br/>
                            Tecnologías aplicadas: JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Tailwind, MongoDB, Firebase.
                        </p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.data}>
                        <ion-icon name="logo-javascript"></ion-icon>
                        <div>
                            <h3>JavaScript</h3>
                            <h4>UTN</h4>
                            <h5>Marzo 2022 - Mayo 2022</h5>
                        </div>
                    </div>
                    <div className={style.details}>
                        <p>
                            En este proyecto desarrollé soluciones en JavaScript fortaleciendo los fundamentos de este lenguaje de programación, principalmente implemente: Sintaxis & Variables, Ciclos/Iteraciones, Funciones, Objetos, Arrays, DOM, Eventos, Storage & JSON, Operadores Avanzados, Promesas/Async, AJAX y Fetch, Axios, Node.js.
                            <br/>
                            Tecnologías aplicadas: Framework Express.js, Motores de plantillas EJS & Handlerbars, Implementacion de Cookies, POO, Unit Testing Jest, Bootstrap, Tailwind, MySql, Hosting Railway.
                        </p>
                    </div>
                </div>
            </article>
            <button onClick={() => view_description()}>
                <span>{name_button}</span>
                <ion-icon name={(name_button == "Ver más")? "chevron-down-outline" : "chevron-up-outline" }></ion-icon>
            </button>
        </a>
    )
}