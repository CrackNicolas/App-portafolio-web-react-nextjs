import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

import { useRef, useState, forwardRef } from "react";
import { useTranslation } from 'react-i18next';
import { key_global_emailjs, key_service_emailjs, key_template_emaijs, key_recaptcha } from '../../config/credentials.js';

import style from '../../styles/partials/contactar.module.css';
import { useForm } from 'react-hook-form';

export default forwardRef(function ComponentContactar(props,ref){
    const {t} = useTranslation();
    
    const {register, formState : { errors }, handleSubmit} = useForm();

    const [active_validation,setActive_validation] = useState(false)
    const [send_email,setSend_email] = useState(false);
    const [state_captcha,setState_captcha] = useState(null);
    const ref_form = useRef(null);
    const recaptcha = useRef(null);

    const onSubmit = () => {
        if(recaptcha.current.getValue()){
            setState_captcha(true);
            ref_form.current.reset();
            recaptcha.current.reset();
            setSend_email(true);
            setActive_validation(false);
            emailjs.sendForm(
                key_service_emailjs,
                key_template_emaijs,
                ref_form.current,
                key_global_emailjs
            ).then(result => console.log(result.text)).catch(error => console.log(error))
        }else{
            setState_captcha(false);
        }
    }

    const onChange = () => {
        setState_captcha(recaptcha.current.getValue()? true : false);
    }

    const style_input = (input) => {
        if(active_validation){
            return (input == "required" || input == "maxLength" || input == "pattern")? {
                boxShadow: "0 0 4px 0.1px red"
            }:{
                boxShadow: "0 0 4px 0.1px var(--color-text-secondary)"
            }
        }
    }

    const style_icon = (input,order) => {
        if(active_validation){
            return (input == "required" || input == "maxLength" || input == "pattern")? {
                display: "flex",
                height: (order == 4)? "65%" : "45%",
                color: "red"
            }:{
                display: "flex",
                height: (order == 4)? "89%" : "74%",
                color: "var(--color-text-secondary)"
            }
        }
    }

    return (
        <section ref={ref.contactar} id="contactar" className={style.container}>
            <h2 className={style.title}>
                <span data-aos="fade-right" data-aos-duration="2000">
                    { t('inicio.txt_3') }
                </span>
                <ion-icon name="mail-outline" data-aos="fade-left" data-aos-duration="2000"></ion-icon>
            </h2>
            <article className={style.form}>
                <h2 data-aos="fade-down" data-aos-duration="2500"> 
                    { t('contact.subtitle') } 
                </h2>
                <form action="" method="POST" ref={ref_form} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className={style.content_input}>
                            {errors.name?.type === "required" && <p>El nombre es requerido</p> }
                            {errors.name?.type === "maxLength" && <p>El nombre debe tener menos de 10 caracteres</p> }
                            <input type="text" style={style_input(errors.name?.type)} placeholder={ t('contact.inputs.j_1') } {...register('name', {
                                required : true,
                                maxLength : 10
                            })} />
                            <div className={style.content_icon} style={style_icon(errors.name?.type,1)}>
                                <ion-icon name={(errors.name?.type==undefined)? "checkmark-circle-outline" : "information-circle-outline"}></ion-icon>
                            </div>
                        </div>
                        <div className={style.content_input}>
                            {errors.last_name?.type === "required" && <p>El apellido es requerido</p> }
                            {errors.last_name?.type === "maxLength" && <p>El apellido debe tener menos de 10 caracteres</p> }
                            <input type="text" style={style_input(errors.last_name?.type)} placeholder={ t('contact.inputs.j_2') } {...register('last_name',{
                                required : true,
                                maxLength : 10
                            })} />
                            <div className={style.content_icon} style={style_icon(errors.last_name?.type,2)}>
                                <ion-icon name={(errors.last_name?.type==undefined)? "checkmark-circle-outline" : "information-circle-outline"}></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className={style.content_input}>
                        {errors.email?.type === "required" && <p>El email es requerido</p> }
                        {errors.email?.type === "pattern" && <p>Email incorrecto</p> }
                        <input type="email" style={style_input(errors.email?.type)} placeholder={ t('contact.inputs.j_3') } {...register('email',{
                            required : true,
                            pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        })} />
                        <div className={style.content_icon} style={style_icon(errors.email?.type,3)}>
                            <ion-icon name={(errors.email?.type==undefined)? "checkmark-circle-outline" : "information-circle-outline"}></ion-icon>
                        </div>
                    </div>
                    <div className={style.content_input}>
                        {errors.message?.type === "required" && <p>El mensaje es requerido</p> }
                        {errors.message?.type === "maxLength" && <p>El mensaje debe tener menos de 10 caracteres</p> }
                        <textarea type="text" style={style_input(errors.message?.type)} placeholder={ t('contact.inputs.j_4') } {...register('message',{
                            required : true
                        })}/>
                        <div className={style.content_icon_txtarea} style={style_icon(errors.message?.type,4)}>
                            <ion-icon name={(errors.message?.type==undefined)? "checkmark-circle-outline" : "information-circle-outline"}></ion-icon>
                        </div>
                    </div>
                    <aside className={style.recaptcha}>
                        <div>
                            <ReCAPTCHA
                                ref={recaptcha}
                                sitekey={key_recaptcha}
                                onChange={onChange}
                            />
                            {state_captcha === false && <p>Te faltó validar que no sos un robot</p> }
                        </div>
                    </aside>
                    <button type="submit" onClick={() => setActive_validation(true)}>
                        <ion-icon name="send-outline"></ion-icon>
                        <span>{ t('menu.i_6') }</span>
                    </button>
                    {send_email && 
                        <p className={style.send_email}>
                            <span>
                                Mensaje enviado con exito...
                            </span>
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </p>
                    }
                </form>
            </article>
        </section>
    )
})