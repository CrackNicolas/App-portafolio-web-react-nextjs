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