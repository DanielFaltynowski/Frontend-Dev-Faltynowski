import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const PrimaryHeadline = () => {
    const context = useContext(ThemeContext)
    return (
        <div className="primary-head-line" style={{backgroundColor: context.headline1, color: context.color1}}>
            <h1>The UG Blog</h1>
        </div>
    )
}
export default PrimaryHeadline