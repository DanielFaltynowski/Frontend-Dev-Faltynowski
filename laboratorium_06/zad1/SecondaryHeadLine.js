import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const SecondaryHeadLine = ({text}) => {
    const context = useContext(ThemeContext)
    return (
        <div className="secondary-head-line" style={{backgroundColor: context.headline3,  color: context.color2}}>
            <p>{text}</p>
        </div>
    )
}
export default SecondaryHeadLine