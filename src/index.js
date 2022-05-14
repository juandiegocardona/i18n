import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const getLocale = ()=>{
    return navigator.language || navigator.userLanguage;
}

getLocale();

ReactDOM.render(
	<IntlProvider 
    locale={getLocale()}
    messages={getLocale()==="es"? localeEsMessages : localeEnMessages}>
        <JobsList theme={getLocale() === "es" ? "light" : "dark"}/>
	</IntlProvider>,
    document.getElementById("root")
);