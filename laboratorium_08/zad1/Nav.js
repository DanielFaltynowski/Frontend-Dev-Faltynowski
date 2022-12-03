import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div style={{textAlign: "center", backgroundColor: "lightgray"}}>
            <Link to={"/"}>
                <div>Main</div>
            </Link>
            <Link to={"/about"}>
                <div>About</div>
            </Link>
            <Link to={"/services"}>
                <div>Services</div>
            </Link>
            <Link to={"/contact"}>
                <div>Contact</div>
            </Link>
            <Link to={"/contact/pl"}>
                <div>Contact PL</div>
            </Link>
            <Link to={"/contact/de"}>
                <div>Contact DE</div>
            </Link>
            <Link to={"/contact/us"}>
                <div>Contact US</div>
            </Link>
        </div>
    )
}
export default Nav