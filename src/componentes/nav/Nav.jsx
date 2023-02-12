
const Nav = (param) => {

    if (param.type === "nav") {
        return (
            <div>
                <nav>


                    <h1>
                        IAwiki
                    </h1>

                    <ul>
                        <li><a href="">Inicio</a> </li>
                        <li><a href="">Busqueda</a> </li>
                    </ul>
                </nav>
            </div>
        )
    }
    else if (param.type === "footer") {
        return (
            <div className='footer'>
                <h2>Contactanos!</h2>
                <h2>Sumate a nuestro equipo</h2>
            </div>
        )
    } else {
        return (

            <div className="contenedor">
                <div className="navCard">
                    <div className="porTitulo">
                        <h2>Buscar por titulo</h2>
                        <input type="search" name="" id="porTitulo" />
                    </div>
                    <div className="porTag">
                        <h2>Buscar por Tag</h2>
                        <input type="search" name="" id="porTag" />
                    </div>
                </div>
                <div className="contieneTag">
                    <div className="card"><h3>titulo </h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, alias.</div>
                    <div className="card"><h3>titulo </h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit officiis alias deserunt fugiat quidem eveniet.</div>
                    <div className="card"><h3>titulo </h3>Lorem ipsum dolor sit amet.</div>
                    <div className="card"><h3>titulo </h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, et nesciunt? Necessitatibus, hic neque officia blanditiis sapiente, deleni</div>
                </div>
            </div>
        )
    }
}
export default Nav