import "./style.css";
import foto from "../components/james.jpg";
function James() {
    return (
        <div className="contenedor">
            <div className="container">
                <h3>James Gosling</h3>
                <img src={foto}></img>
            
                    <b>

                        James Arthur Gosling es un científico de ciencias de la computación canadiense, más conocido como el padre del lenguaje de programación Java. Este lenguaje de programación fue desarrollado por Gosling cuando trabajaba en Sun Microsystems en 1996. Actualmente es utilizado para desarrollar gran parte del software empresarial mundial y las aplicaciones móviles de Android. James Gosling condujo el desarrollo de Java durante sus 26 años en Sun Microsystems, donde pasó de ingeniero a director de tecnología. En el 2010, Oracle compra Sun Microsystems por $7,400 millones y Gosling se fue ese mismo año, uniéndose a Google, donde pasó seis meses, según su perfil de LinkedIn. En Google, se unió a su antiguo colega de Sun, Eric Schmidt, quién desempeñó un papel importante en el desarrollo inicial de Java.
                    </b>
                
            </div>
        </div>
    );
}
export default James;