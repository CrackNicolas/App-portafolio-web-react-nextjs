import React from 'react';

import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next';
import style from '../../styles/partials/sobre_mi.module.css';

export default React.forwardRef(function ComponentSobreMi(props,ref){
    const {t} = useTranslation();

    const is_mobile = useMediaQuery({ query: '(max-width: 575px)' });

    return (
        <section ref={ref.sobre_mi} id="sobre-mi" className={style.container}>
            <h2 className={style.title}>
                <span>
                    { t('sobre-mi.title') }
                </span>
                <ion-icon name="person-outline"></ion-icon>
            </h2>
            <h4 className={style.contratan}>
                { t('sobre-mi.subtitle') }
            </h4>
            <p className={style.description}>
                { t('sobre-mi.description.line_1') }
                <br/>
                { t('sobre-mi.description.line_2') }
            </p>
            <article className={style.habilidades}>
                <div className={style.porcentaje} style={{"--number-porcentaje":100}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <i className={style.bootstrap+" bx bxl-bootstrap bx-"+((is_mobile)? "xs" : "md")}></i>
                        <h2>
                            100
                            <span>%</span>
                        </h2>
                        <p>Bootstrap</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":90}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/mysql-logo.png"/>
                        <h2>
                            90
                            <span>%</span>
                        </h2>
                        <p>MySql</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":90}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <i className={style.react+" bx bxl-react bx-"+((is_mobile)? "xs" : "md")}></i>
                        <h2>
                            90
                            <span>%</span>
                        </h2>
                        <p>React</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/java-coffee-cup-logo.png"/>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>Java</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/angularjs.png"/>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>Angular</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/typescript--v1.png"/>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>TypeScript</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":90}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/css3.png"/>
                        <h2>
                            90
                            <span>%</span>
                        </h2>
                        <p>CSS</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":90}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/html-5.png"/>
                        <h2>
                            90
                            <span>%</span>
                        </h2>
                        <p>HTML</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/php.png"/>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>PHP</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":90}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="/images/npm.png"/>
                        <h2>
                            90
                            <span>%</span>
                        </h2>
                        <p>npm</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":90}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/node-js.png"/>
                        <h2>
                            90
                            <span>%</span>
                        </h2>
                        <p>Node.js</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":90}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/javascript.png"/>
                        <h2>
                            90
                            <span>%</span>
                        </h2>
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/tailwind_css.png"/>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>Tailwind</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":70}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/c-plus-plus-logo.png"/>
                        <h2>
                            70
                            <span>%</span>
                        </h2>
                        <p>C/C++</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":70}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <i className={style.mongodb+" bx bxl-mongodb bx-"+((is_mobile)? "xs" : "md")}></i>
                        <h2>
                            70
                            <span>%</span>
                        </h2>
                        <p>MongoDB</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":70}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <i className={style.jquery+" bx bxl-jquery bx-"+((is_mobile)? "xs" : "md")}></i>
                        <h2>
                            70
                            <span>%</span>
                        </h2>
                        <p>jQuery</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":60}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="https://img.icons8.com/fluency/48/null/arduino.png"/>
                        <h2>
                            60
                            <span>%</span>
                        </h2>
                        <p>Arduino</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img src="/images/next.png"/>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>Next.js</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <img className={style.jira} src="/images/jira.png"/>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>Jira</p>
                    </div>
                </div>
                <div className={style.porcentaje} style={{"--number-porcentaje":80}}>
                    <div className={style.dot}></div>
                    <svg className={style.svg}>
                        {
                            is_mobile? 
                                <>
                                    <circle cx="30" cy="30" r="30"></circle>
                                    <circle cx="30" cy="30" r="30"></circle>
                                </>
                            :
                                <>
                                    <circle cx="50" cy="50" r="50"></circle>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </>
                        }
                    </svg>
                    <div className={style.number}>
                        <i className={style.trello+" lab la-trello bx-"+((is_mobile)? "xs" : "md")}></i>
                        <h2>
                            80
                            <span>%</span>
                        </h2>
                        <p>Trello</p>
                    </div>
                </div>
            </article>
        </section>
    )
})