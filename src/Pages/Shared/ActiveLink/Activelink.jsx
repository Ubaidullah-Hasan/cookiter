import "./active.css"
import { NavLink } from 'react-router-dom';

const Activelink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "active text-decoration-none" : "text-decoration-none mx-md-3 my-1 my-md-0 text-dark hover-link"
            }
        >
            {children}
        </NavLink>
    );
};

export default Activelink;