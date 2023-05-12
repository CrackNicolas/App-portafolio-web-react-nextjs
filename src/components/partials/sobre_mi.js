import {forwardRef} from 'react';

import { useTranslation } from 'react-i18next';
import style from '../../styles/partials/sobre_mi.module.css';

export default forwardRef(function ComponentSobreMi(props,ref){
    const {t} = useTranslation();

    return (
        <section ref={ref.sobre_mi} id="sobre-mi" className={style.container}>
            <h2 className={style.title}>
                <span data-aos="fade-right" data-aos-duration="2000">
                    { t('sobre-mi.title') }
                </span>
                <ion-icon name="person-outline" data-aos="fade-left" data-aos-duration="2000"></ion-icon>
            </h2>
            <h4 className={style.contratan} data-aos="fade-right" data-aos-duration="2500">
                { t('sobre-mi.subtitle') }
            </h4>
            <p className={style.description} data-aos="fade-right" data-aos-duration="3000">
                { t('sobre-mi.description.line_1') }
                <br/>
                { t('sobre-mi.description.line_2') }
            </p>
            <article className={style.habilidades} data-aos="fade-up" data-aos-duration="2000">
                <div className={style.habilidad} style={{"--number-porcentaje" : "100%"}}>
                    <div className={style.name}>
                        <span>
                            Bootstrap
                        </span>
                        <i className={style.bootstrap+" bx bxl-bootstrap bx-sm"}></i>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            MySql
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/mysql-logo.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            React
                        </span>
                        <i className={style.react+" bx bxl-react bx-sm"}></i>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "80%"}}>
                    <div className={style.name}>
                        <span>
                            Java
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/java-coffee-cup-logo.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            Angular
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/angularjs.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "80%"}}>
                    <div className={style.name}>
                        <span>
                            TypeScript
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/typescript--v1.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            CSS
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/css3.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            HTML
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/html-5.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "80%"}}>
                    <div className={style.name}>
                        <span>
                            PHP
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/php.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            npm
                        </span>
                        <img src="/images/npm.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            Node.js
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/node-js.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "90%"}}>
                    <div className={style.name}>
                        <span>
                            JavaScript
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/javascript.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "80%"}}>
                    <div className={style.name}>
                        <span>
                            Tailwind
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/tailwind_css.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "70%"}}>
                    <div className={style.name}>
                        <span>
                            C/C++
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/c-plus-plus-logo.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "70%"}}>
                    <div className={style.name}>
                        <span>
                            MongoDB
                        </span>
                        <i className={style.mongodb+" bx bxl-mongodb bx-sm"}></i>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "70%"}}>
                    <div className={style.name}>
                        <span>
                            jQuery
                        </span>
                        <i className={style.jquery+" bx bxl-jquery bx-sm"}></i>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "50%"}}>
                    <div className={style.name}>
                        <span>
                            Arduino
                        </span>
                        <img src="https://img.icons8.com/fluency/48/null/arduino.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "80%"}}>
                    <div className={style.name}>
                        <span>
                            Next.js
                        </span>
                        <img src="/images/next.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "80%"}}>
                    <div className={style.name}>
                        <span>
                            Jira
                        </span>
                        <img className={style.jira} src="/images/jira.png"/>
                    </div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.habilidad} style={{"--number-porcentaje" : "80%"}}>
                    <div className={style.name}>
                        <span>
                            Trello
                        </span>
                        <i className={style.trello+" lab la-trello bx-sm"}></i>
                    </div>
                    <div className={style.bar}></div>
                </div>
            </article>
        </section>
    )
})