import "../Footer/Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">

                    <div className="col">

                        <p className="text-muted">MITCH PARFAM © 2022</p>
                    </div>

                    <div className="col">
                        <h5>Comunidad</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#">Nosotros</a></li>
                            <li className="nav-item mb-2"><a href="#">Contacto</a></li>
                            <li className="nav-item mb-2"><a href="#">Locales</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
