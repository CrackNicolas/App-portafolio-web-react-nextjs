import React, { createRef } from "react";

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
    const ref_inicio = React.createRef();
    const ref_sobre_mi = React.createRef();
    const ref_services = React.createRef();
    const ref_portfolio = React.createRef();
    const ref_educacion = React.createRef();
    const ref_contactar = React.createRef();

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
            <ComponentMenuLeft inicio={ref_inicio} sobre_mi={ref_sobre_mi} services={ref_services} portfolio={ref_portfolio} educacion={ref_educacion} contactar={ref_contactar}/>
            <ComponentInicio ref={{inicio : ref_inicio}}/>
            <ComponentSobreMi ref={{sobre_mi : ref_sobre_mi}}/>
            <ComponentServices ref={{services : ref_services}}/>
            <ComponentPortfolio ref={{portfolio : ref_portfolio}}/>
            <ComponentEducacion ref={{educacion : ref_educacion}}/>
            <ComponentContactar ref={{contactar : ref_contactar}}/>
            <ComponentFooter/>
            <ComponentRedesSociales/>
        </section>
    )
}