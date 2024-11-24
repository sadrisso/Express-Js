import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to="/phones">Phones</Link>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Header;