import "./style.css";
import foto from "../components/linus.jpg";


function Linus() {
    return (
        <div className="contenedor">
            <div className="container">
                <h3>Linus Torvalds</h3>
                <img src={foto}></img>
                
                    <b>

                        Linus Benedict Torvalds, es un ingeniero de software finlandés, programador pionero y creador del Linux Kernel en 1991. El kernel Linux, escrito en C, es el componente principal o núcleo utilizado en los Sistemas Operativos Libres. Torvalds, actualmente se desempeña como coordinador principal del proyecto Kernel de Linux, proyecto open source que tiene el soporte de cientos de programadores de todo el mundo.

                        Actualmente es miembro del consejo de administración de la Linux Foundation, organización que promueve el uso y capacitación online del Sistema Operativo de Linux.
                    </b>
                
            </div>
        </div>
    )

}
export default Linus;