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

export default function ComponentIsDeskatop(){
    let ubicacion_principal = window.pageYOffset;
    let nav = document.querySelector(".main"); 

    window.addEventListener('scroll', () => {
        let ubicacion_actual = this.window.pageYOffset;
        console.log("gatos:"+ ubicacion_actual);

        ubicacion_principal = ubicacion_actual;
    });
    
    return (
        <section className="main">
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