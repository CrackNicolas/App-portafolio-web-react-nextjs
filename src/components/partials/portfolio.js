import { Link } from 'react-scroll';
import style from '../../styles/partials/portfolio.module.css';
import { useTranslation } from 'react-i18next';
import { useRef, useState, forwardRef } from 'react';

export default forwardRef(function ComponentPortfolio(props,ref){
    const {t} = useTranslation();
    
    const [name_button,setName_button] = useState("button_view.txt_1");
    const proyects = useRef();

    const view_proyects = () => {
        setName_button( (proyects.current.style.height == 'auto')? 'button_view.txt_1' : 'button_view.txt_2' );
        proyects.current.style.height = (proyects.current.style.height == 'auto')? "475px" : "auto";
    }

    return (
        <section ref={ref.portfolio} id="portfolio" className={style.container}>
            <h2 className={style.title}>
                <span data-aos="fade-right" data-aos-duration="2000">
                    { t('portfolio.title') }
                </span>
                <ion-icon name="briefcase-outline" data-aos="fade-left" data-aos-duration="2000"></ion-icon>
            </h2>
            <h3 className={style.subtitle} data-aos="fade-right" data-aos-duration="2500">
                { t('portfolio.subtitle') }
            </h3>
            <article className={style.proyect} ref={proyects} data-aos="fade-up" data-aos-duration="2000">
                <div className={style.card}>
                    <img src="/images/youtube.png"/>
                    <div className={style.description}>
                        <p>
                            { t('portfolio.proyects.p_1.data') }
                            <br/>
                            { t('portfolio.proyects.p_1.tecnologias') }
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
                    <img src="/images/Comidas_lo_mejor.png"/>
                    <div className={style.description}>
                        <p>
                            { t('portfolio.proyects.p_2.data') }
                            <br/>
                            { t('portfolio.proyects.p_2.tecnologias') }
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackAlejo/App-venta-online-react">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                            <a target="_blank" href="https://app-venta-online-react.vercel.app/">
                                <ion-icon name="link-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/pinterest.png"/>
                    <div className={style.description}>
                        <p>
                            { t('portfolio.proyects.p_3.data') }
                            <br/>
                            { t('portfolio.proyects.p_3.tecnologias') }
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
                            { t('portfolio.proyects.p_4.data') }
                            <br/>
                            { t('portfolio.proyects.p_4.tecnologias') }
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
                            { t('portfolio.proyects.p_5.data') }
                            <br/>
                            { t('portfolio.proyects.p_5.tecnologias') }
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
                            { t('portfolio.proyects.p_6.data') }
                            <br/>
                            { t('portfolio.proyects.p_6.tecnologias') }
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-parser-mysql-java">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="/images/Clasical_model.jpg"/>
                    <div className={style.description}>
                        <p>
                            { t('portfolio.proyects.p_7.data') }
                            <br/>
                            { t('portfolio.proyects.p_7.tecnologias') }
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
                            { t('portfolio.proyects.p_8.data') }
                            <br/>
                            { t('portfolio.proyects.p_8.tecnologias') }
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
                            { t('portfolio.proyects.p_9.data') }
                            <br/>
                            { t('portfolio.proyects.p_9.tecnologias') }
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
                            { t('portfolio.proyects.p_10.data') }
                            <br/>
                            { t('portfolio.proyects.p_10.tecnologias') }
                        </p>
                        <p>
                            <a target="_blank" href="https://github.com/CrackNicolas/App-editorialdelibros-c">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </a>
                        </p>
                    </div>
                </div>
            </article>
            <button onClick={() => view_proyects()} data-aos="fade-up" data-aos-duration="3000">
                <span>{ t(name_button) }</span>
                <ion-icon name={(name_button == "button_view.txt_1")? "chevron-down-outline" : "chevron-up-outline" }></ion-icon>
            </button>
            <article className={style.experiencia}>
                <div>
                    <h3 data-aos="fade-right" data-aos-duration="2000">
                        { t('portfolio.experience.title') }
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        { t('portfolio.experience.data.txt_1') }
                        <br/><br/>
                        { t('portfolio.experience.data.txt_2') }
                        <br/><br/>
                        { t('portfolio.experience.data.txt_3') }
                    </p>
                </div>
                <div>
                    <Link to="contactar" spy={true} smooth={true} offset={0} duration={500} data-aos="fade-left" data-aos-duration="3000">
                        <ion-icon name="mail-outline"></ion-icon>
                        <span>
                            { t('inicio.txt_3') }
                        </span>
                    </Link>
                </div>
            </article>
            <article className={style.data}>
                <div className={style.item} data-aos="fade-down" data-aos-duration="3000">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <p>
                        <span>50+</span>
                        <span>
                            { t('portfolio.additional.txt_1') }
                        </span>
                    </p>
                </div>
                <div className={style.item} data-aos="fade-down" data-aos-duration="2500">
                    <ion-icon name="happy-outline"></ion-icon>
                    <p>
                        <span>43</span>
                        <span>
                            { t('portfolio.additional.txt_2') }
                        </span>
                    </p>
                </div>
                <div className={style.item} data-aos="fade-down" data-aos-duration="2000">
                    <ion-icon name="flash-outline"></ion-icon>
                    <p>
                        <span>4</span>
                        <span>
                            { t('portfolio.additional.txt_3') }
                        </span>
                    </p>
                </div>
                <div className={style.item} data-aos="fade-down" data-aos-duration="1500">
                    <ion-icon name="body-outline"></ion-icon>
                    <p>
                        <span>4</span>
                        <span>
                            { t('portfolio.additional.txt_4') }
                        </span>
                    </p>
                </div>
            </article>
        </section>
    )
})