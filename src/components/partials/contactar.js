import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { key_global_emailjs, key_service_emailjs, key_template_emaijs, key_recaptcha } from '../../config/credentials.js';

import style from '../../styles/partials/contactar.module.css';
import { useForm } from 'react-hook-form';

export default function ComponentContactar(){
    const {t} = useTranslation();
    
    const {register, formState : { errors },handleSubmit} = useForm();

    const [state_captcha,setState_captcha] = useState(null);
    const ref_form = useRef(null);
    const recaptcha = useRef(null);

    const onSubmit = () => {
        if(state_captcha){
            /*emailjs.sendForm(
                key_service_emailjs,
                key_template_emaijs,
                ref_form.current,
                key_global_emailjs
            ).then(result => console.log(result.text)).catch(error => console.log(error))
            */
        }
    }

    const onChange = () => {
        setState_captcha(recaptcha.current.getValue())
    }

    return (
        <section id="contactar" className={style.container}>
            <h2 className={style.title}>
                <span>{ t('inicio.txt_3') }</span>
                <ion-icon name="mail-outline"></ion-icon>
            </h2>
            <article className={style.form}>
                <h2> { t('contact.subtitle') } </h2>
                <form action="" method="POST" ref={ref_form} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="text" placeholder={ t('contact.inputs.j_1') } {...register('name', {
                            required : true,
                            maxLength : 10
                        })}  />
                        {errors.name?.type === "required" && <p>El nombre es requerido</p> }
                        {errors.name?.type === "maxLength" && <p>El nombre debe tener menos de 10 caracteres</p> }
                        <input type="text" placeholder={ t('contact.inputs.j_2') } {...register('last_name',{
                            required : true,
                            maxLength : 10
                        })} />
                        {errors.last_name?.type === "required" && <p>El apellido es requerido</p> }
                        {errors.last_name?.type === "maxLength" && <p>El apellido debe tener menos de 10 caracteres</p> }
                    </div>
                    <input type="email" placeholder={ t('contact.inputs.j_3') } {...register('email',{
                        required : true,
                        pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === "required" && <p>El email es requerido</p> }
                    {errors.email?.type === "pattern" && <p>Email incorrecto</p> }
                    <textarea type="text" placeholder={ t('contact.inputs.j_4') } {...register('message',{
                        required : true
                    })}/>
                    {errors.message?.type === "required" && <p>El mensaje es requerido</p> }
                    {errors.message?.type === "maxLength" && <p>El mensaje debe tener menos de 10 caracteres</p> }
                    <aside className={style.recaptcha}>
                        <div>
                            <ReCAPTCHA
                                ref={recaptcha}
                                sitekey={key_recaptcha}
                                onChange={onChange}
                            />
                        </div>
                        {recaptcha.current?.getValue() == false && <p>Te faltó validar que no sos un robot.</p>}
                    </aside>
                    <button type="submit">
                        <ion-icon name="send-outline"></ion-icon>
                        <span>{ t('menu.i_6') }</span>
                    </button>
                </form>
            </article>
        </section>
    )
}