
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"



const Navbar = () => {
    

    return (

        <div className="navbar">
            <h1 className="titulo">MITCH PARFAM</h1>
            <ul>
                <li>
                    <NavLink to="/">INICIO</NavLink>
                </li>
                <li>
                    <NavLink to="/genero/femenino">FRAGANCIA DE DAMA</NavLink>
                </li>
                <li>
                    <NavLink to="/genero/masculino">FRAGANCIA DE CABALLERO</NavLink>
                </li>
                <li>
                    <NavLink to="/genero/unisex">PARA TODOS</NavLink>
                </li>
                
            </ul>

            <CartWidget />
            
        </div>
    )
}

export default Navbar
