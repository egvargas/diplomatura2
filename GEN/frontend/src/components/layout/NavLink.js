import React from "react";
import {
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";

const NavLink = ({ children, to,  activeClassName, className, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ patch: resolved.pathname, end: true });

    return (
        <div>
            <Link
            className={`${className} ${match ? activeClassName : null}`}
            to={to}
            {...props}
        >
            {children}
            </Link>
        </div>
    );
}
export default NavLink;