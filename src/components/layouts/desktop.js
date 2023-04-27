import React from "react";

import ComponentMenuLeft from "../partials/desktop/menu_left.js";
import ComponentPresentation from "../partials/desktop/presentation.js";
import ComponentRedesSociales from "../partials/desktop/redes_sociales.js";

export default function ComponentIsDeskatop(){
    return (
        <section>
            <ComponentMenuLeft/>
            <ComponentPresentation/>
            <ComponentRedesSociales/>
        </section>
    )
}