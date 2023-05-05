import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import style from '../../styles/partials/contactar.module.css';

export default function ComponentContactar(){
    const {t} = useTranslation();
    const [state, handleSubmit] = useForm("xvonwlew");

    return (
        <section id="contactar" className={style.container}>
            <h2 className={style.title}>
                <span>{ t('inicio.txt_3') }</span>
                <ion-icon name="mail-outline"></ion-icon>
            </h2>
            <article className={style.form}>
                <h2> { t('contact.subtitle') } </h2>
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" id="name" name="name" placeholder={t('contact.inputs.j_1')} />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                        <input type="text" id="last_name" name="last_name" placeholder={t('contact.inputs.j_2')} />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <input type="email" id="email" name="email" placeholder={t('contact.inputs.j_3')} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <textarea type="text" id="message" name="message" placeholder={t('contact.inputs.j_4')}/>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <button type="submit" disabled={state.submitting}>
                        <ion-icon name="send-outline"></ion-icon>
                        <span>{ t('menu.i_6') }</span>
                    </button>
                </form>
            </article>
        </section>
    )
}