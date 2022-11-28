import "./style.css";
import foto from "../components/denis.jpg";
function Dennis() {
    return (
        <div className="contenedor">
            <div className="container">
                <h3>Dennis Ritchie</h3>
                <img src={foto}></img>
                
                    <b>
                    Dennis Ritchie MacAlistair fue un científico informático estadounidense cuyos aportes fueron el inicio de la revolución tecnológica que hoy vivimos. Se le conoce como el «Padre del Lenguaje C«, debido a que él originalmente inició el desarrollo del lenguaje de programación C en 1969 y con sus colegas de mucho tiempo, Ken Thompson y Brian Kernighan, crearon el sistema operativo Unix (cuyo kernel esta escrito en C). Junto a Brian Kernighan escribieron el libro «The C Programming Language«, libro que fue parte importe del desarrollo y difusión del lenguaje C en todo el mundo.

Sus grandes aportes a la ciencias de la computación, han sentado las bases para el desarrollo de nuevas tecnologías como los Sistemas Operativos GNU/Linux o Mac OS X, y el nacimiento de nuevos lenguajes de programación como C++ y Java. Falleció el 12 de Octubre del 2011 a los 70 años de edad.
                    </b>
                
            </div>
        </div>
    );
}
export default Dennis;