import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const Paragraph = ({text}) => {
    const context = useContext(ThemeContext)
    return (
        <div className="paragraph" style={{backgroundColor: context.headline2, color: context.color3}}>
            <p>{text}</p>
        </div>
    )
}
export default Paragraph