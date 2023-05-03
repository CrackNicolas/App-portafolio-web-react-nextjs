import React from "react";

import ComponentMenuLeft from "../partials/desktop/menu_left.js";
import ComponentInicio from "../partials/desktop/inicio.js";
import ComponentSobreMi from "../partials/desktop/sobre_mi.js";
import ComponentServices from "../partials/desktop/services.js";
import ComponentPortfolio from "../partials/desktop/portfolio.js";
import ComponentEducacion from "../partials/desktop/educacion.js";
import ComponentContactar from "../partials/desktop/contactar.js";
import ComponentFooter from "../partials/desktop/footer.js";
import ComponentRedesSociales from "../partials/desktop/redes_sociales.js";

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

    return (
        <section>
            <ComponentMenuLeft/>
            <ComponentInicio/>
            <ComponentSobreMi/>
            <ComponentServices/>
            <ComponentPortfolio/>
            <ComponentEducacion/>
            <ComponentContactar/>
            <ComponentFooter/>
            <ComponentRedesSociales/>
        </section>
    )
}