//import NavLink from "./NavLink";
import '../../styles/components/layout/style.css'
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="active" exact to="/">Inicio</NavLink></li>
                    <li><NavLink activeClassName="active" exact to="/productos">Productos</NavLink></li>
                    <li><NavLink activeClassName="active" exact to="/presentacion">Presentacion</NavLink></li>
                    <li><NavLink activeClassName="active" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="active" exact to="/contacto">Contacto</NavLink></li>
                </ul>

            </div>
        </nav>

    );
}

export default Nav;
