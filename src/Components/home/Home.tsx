import "./Home.css"
import data from "../../Translation/English/translation.json"
import {addResources, translation} from "../../../src/i18n"

addResources("en", "home", {
    line1: data.english.line1,
    line2: data.english.line2,
    line3: data.english.line3,
});

export const Home = () => {
    return(
        <div className="buttonStyle">
            <button className="button1">English</button>
            <button className="button1">Spanish</button>
            <button className="button1">French</button>
            <div className="paraStyle">
                {translation("home", "line1")} <br/>
                {translation("home", "line2")} <br/>
                {translation("home", "line3")} <br/>
            </div>
            
        </div>
    );
}