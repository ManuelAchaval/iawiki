import Nav from "./nav/Nav"
import "./nav/Footer.css"
import "./nav/Nav.css"

const App = () => {
    return (
        <div>
            <Nav type="nav"/>
            <p style={{textAlign:"center"}}>
                Acá se pueden consultar sobre temas varios y también buscar sobre un tema especifico utilizando nuestro sistema de etiquetas
            </p>
            <Nav/>
            <Nav type="footer"/>
        </div>
    )
}
export default App