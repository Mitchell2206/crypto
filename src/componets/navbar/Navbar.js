import "./Navbar.css"
import Icon from "../Icon/Icon"


const Navbar = () => {
    return (
        
        <div className="navbar">
            <h1 className="titulo">MEGACRIPTO</h1>
            <ul>
                <li><a href="">PRODUCTOS</a></li>
                <li><a href="">ARMA TU PC</a></li>
                <li><a href="">MARCAS</a></li>
                <li><a href="">AYUDA</a></li>
            </ul>

           <Icon/>
        </div>
    )
}

export default Navbar
