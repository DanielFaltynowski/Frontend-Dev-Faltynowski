import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <h2 className="header">Kittybook</h2>
            <p className="smalltext">Inspired by Facebook</p>
            <Link to="/" className="button">
                <div>
                    Home
                </div>
            </Link>
        </div>
    )
}
export default Nav