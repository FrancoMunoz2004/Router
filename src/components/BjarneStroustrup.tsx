import "./style.css";
import foto from "../components/Bjarne.jpg";
function Bjarne() {
    return (
        <div className="contenedor">
            <div className="container">
                <h3>Bjarne Stroustrup</h3>
                <img src={foto}></img>
                
                    <b>
                        Bjarne Stroustrup es un científico de la computación danés, quién en 1979 mientras trabaja en Bell Labs creó el lenguaje de programación C++, un potente lenguaje de programación que ha tenido una influencia monumental en la industria del desarrollo de software actual, muchas organizaciones usan C++ como parte de su stack tecnológico, como es el caso de Google, cuyo motor de búsqueda está escrito en C ++, al igual que la mayoría de la infraestructura de soporte de Google.

                        Es Profesor Distinguido de Investigación y mantiene el Colegio de Cátedra de Ingeniería en Informática en la Universidad de Texas A & M University, profesor visitante en la Universidad de Columbia, y trabaja en Morgan Stanley.

                        Es autor del libro «The C++ Programming Language«, libro ampliamente difundido por universidades de todo el mundo.
                    </b>
                
            </div>
        </div>
    );
}
export default Bjarne;