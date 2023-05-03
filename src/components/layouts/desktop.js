import React from "react";

import ComponentMenuLeft from "../partials/menu_left.js";
import ComponentInicio from "../partials/inicio.js";
import ComponentSobreMi from "../partials/sobre_mi.js";
import ComponentServices from "../partials/services.js";
import ComponentPortfolio from "../partials/portfolio.js";
import ComponentEducacion from "../partials/educacion.js";
import ComponentContactar from "../partials/contactar.js";
import ComponentFooter from "../partials/footer.js";
import ComponentRedesSociales from "../partials/redes_sociales.js";

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../i18n/en.json';
import es from '../../i18n/es.json';

export default function ComponentIsDeskatop(){

    i18next.use(initReactI18next).init({
        lng : "es",
        interpolation : {
            escapeValue : false
        },
        resources : {
            en : {
                translation : en
            },
            es : {
                translation : es
            }
        }
    })
    /*
            <ComponentPortfolio/>
            <ComponentEducacion/>
            <ComponentContactar/>
            <ComponentFooter/>
            **/
    return (
        <section>
            <ComponentMenuLeft/>
            <ComponentInicio/>
            <ComponentSobreMi/>
            <ComponentServices/>
            <ComponentRedesSociales/>
        </section>
    )
}