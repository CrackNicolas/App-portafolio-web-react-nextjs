import style from '../../../styles/partials/desktop/portfolio.module.css';

export default function ComponentPortfolio(){
    return (
        <a id="portfolio" className={style.container}>
            <h2 className={style.title}>
                <span>
                    Portfolio
                </span>
                <ion-icon name="briefcase-outline"></ion-icon>
            </h2>
            <h3 className={style.subtitle}>Ultimos proyectos</h3>
            <article className={style.proyect}>
                <div className={style.card}>
                    <img src="/images/youtube.png"/>
                    <div className={style.description}>
                        <p>
                            App YouTube, realice esta aplicacion solo como una replica de la aplicacion oficial sin ningun tipo de intencion de violar sus politicas de privacidad. Estado de la aplicacion (Periodo de pruebas) aplicacion completa en un 15%, cada tanto continuo trabajando en ella y planeo completarla en un 100%.
                            <br/>
                            Tecnologias utilizadas
                            React, JavaScript, HTML5, CSS3
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/My_youtube">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                            <a target="_blank" href="https://my-youtube-ruddy.vercel.app/">
                                <ion-icon name="link-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/pinterest.png"/>
                    <div className={style.description}>
                        <p>
                            App web en donde se puede realizar la gestion de imagenes al estilo pinterest.
                            <br/>
                            Tecnologias utilizadas
                            JavaScript, Framework Express.js, MongoDB, Motor de plantillas EJS, Framework Bootstrap, CSS3, HTML5
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-pinterest-express.js">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/quizz.png"/>
                    <div className={style.description}>
                        <p>
                            App web de administracion de usuarios, con seguridad para evitar ataques como XSS, CSRF, SQL INJECTION, CODE INJECTION, BRUTE FORCE ROBOTS tambien incluye SSL y el archivo .htaccess
                            <br/>
                            Tecnologias utilizadas
                            PHP implementacion de PDO, Framework Bootstrap, HTML5, CSS3, DB MySql, DB deploy con Clever cloud
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-stack-usuarios-php">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/QA.png"/>
                    <div className={style.description}>
                        <p>
                            App web, fabrica de calzados con lineas de produccion y ordenes de produccion con modelo y color, estas estan supervisadas por 2 operadores, que realizan el control de calidad de los calzados.
                            <br/>
                            Tecnologias utilizadas
                            JavaScript, TypeScript, Framework Express.js, Mysql, CSS3, HTML5, Framework Tailwind, Motor de plantillas HandleBards, Testing con jest
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-control-de-calidad-calzados-express.js">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/Parser.png"/>
                    <div className={style.description}>
                        <p>
                            App desktop, GUI que cuenta con un analizador lexico y sintactico y una seccion donde podemos ingresar consultas sql, luego de ejecutar el sistema nos devolvera el analisis del analizador lexico y sintactico con un mansaje de validacion de nuestra consulta.
                            <br/>
                            Tecnologias utilizadas
                            Java, IDE NetBeans, Librerias java-cup.jar, java-cup-11a.jar, Jflex.jar
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-parser-mysql-java">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/Clasical_model.png"/>
                    <div className={style.description}>
                        <p>
                            App desktop, consiste en la administracion de una empresa que cuenta con Empleados, Usuarios, Oficinas, Productos, Pedidos, Pagos, Clientes, Linea de productos, Detalles de pedidos
                            <br/>
                            Tecnologias utilizadas
                            Java, IDE NetBeans 8.2, MySql, Librerias mysql-connector-java-8.0.21.jar, jcalendar-1.3.2.jar, swingx-1.6.2.jar, NefAnimation_V2.1_jdk17.jar
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-clasicalmodels-java">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/Juego_pong.png"/>
                    <div className={style.description}>
                        <p>
                            App, consiste en un juego donde tenemos 7 leds, al iniciar los leds comienzan en color azul al llegar al extremo de la tira led espera 1seg a que el jugador presione el boton para continuar, en caso de pasado el tiempo sin presionar el boton, el juego nos muestra una led de color rojo y vuelve a iniciar el juego.
                            <br/>
                            Tecnologias utilizadas
                            Arduino, Tinkercat
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-juegopong-arduino">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/Analizador_lexico.png"/>
                    <div className={style.description}>
                        <p>
                            Consiste en dos Aplicaciones que realizan un analisis lexico de 2 formas distintas, una es usando matrizes y la otra es usando codigo logico.
                            <br/>
                            Tecnologias utilizadas
                            C, C++
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-analizadoreslexicos-c">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/editorial.png"/>
                    <div className={style.description}>
                        <p>
                            App desktop, consiste en la administracion de una editorial de libros, que ademas implementa la validacion y uso de ISBNS.
                            <br/>
                            Tecnologias utilizadas
                            C, C++
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-editorialdelibros-c">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
            </article>
            <article className={style.experiencia}>
                <div>
                    <h3>Cuál es mi experiencia profesional?</h3>
                    <p>
                        Trabajo como desarrollado web freelance hace 12 años, aplicando principalmente a proyectos con CMS.
                        <br/><br/>
                        He tenido la oportunidad de trabajar para empresas privadas y entidades públicas.
                        <br/><br/>
                        Actualmente, me encuentro en la búsqueda de un puesto laboral que me enriquezca como profesional, donde pueda colaborar en grandes proyectos con expertos en el área de desarrollo web.
                    </p>
                </div>
                <div>
                    <a href="#contactar">
                        <ion-icon name="mail-outline"></ion-icon>
                        <span>
                            Contactame
                        </span>
                    </a>
                </div>
            </article>
        </a>
    )
}