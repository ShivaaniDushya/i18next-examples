import "./Home.css"
import { useTranslation } from "react-i18next";

export const Home = () => {

    const { t, i18n } = useTranslation();

    const onClickLanguageChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
    }

    return(
        <div className="align">
        <select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
        <option value="en" >English</option>
        <option value="es" >Spanish</option>
        <option value="fr" >French</option>
        </select>

            <div className="paraStyle">
                {t("line1")} <br/>
                {t("line2")} <br/>
                {t("line3")} <br/>
            </div>
            
        </div>
    );
}