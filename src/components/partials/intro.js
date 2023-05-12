import { useEffect, useRef } from 'react';
import style from '../../styles/partials/intro.module.css';

export default function ComponentIntro(){
    const ref_intro = useRef(null);
    const ref_logo = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            let index = 0;
            for(let span of ref_logo.current.children) {
                setTimeout(() => {
                    span.style.bottom = "0";
                    span.style.opacity = "1";
                    span.style.transition = "ease-in-out 0.5s";
                },(index + 1) * 100);
                index++;
            }  
            
            setTimeout(() => {
                ref_intro.current.style.top = "-100vh";
            },2300);
        })
    },[])

    return (
        <section ref={ref_intro} className={style.intro}>
            <article className={style.description}>
                <img src="/images/Logo.png" data-aos="fade-down" data-aos-duration="1000"/>
                <h1 ref={ref_logo} className={style.logo}>
                    <span className={style.logo_parts}>F</span>
                    <span className={style.logo_parts}>U</span>
                    <span className={style.logo_parts}>L</span>
                    <span className={style.logo_parts}>L</span>
                    <span className={style.logo_parts}>&nbsp;</span>
                    <span className={style.logo_parts}>S</span>
                    <span className={style.logo_parts}>T</span>
                    <span className={style.logo_parts}>A</span>
                    <span className={style.logo_parts}>C</span>
                    <span className={style.logo_parts}>K</span>
                </h1>
                <p data-aos="fade-up" data-aos-duration="1000">
                    Development
                </p>
            </article>
        </section>
    )
}