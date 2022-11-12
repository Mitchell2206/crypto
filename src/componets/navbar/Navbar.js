import "./Navbar.css"
import Icon from "../CartWidget/Icon"



const Navbar = () => {
    return (
        
        <div className="navbar">
            <h1 className="titulo">MitchPerfumeria</h1>
            <ul>
                <li><a href="">INICIO</a></li>
                <li><a href="">FRAGANCIA DE DAMA</a></li>
                <li><a href="">FRAGANCIA DE CABALLERO</a></li>
                <li><a href="">PARA TODOS</a></li>
            </ul>

           <Icon/>
        </div>
    )
}

export default Navbar
