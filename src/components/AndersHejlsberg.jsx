import "./style.css";
import logo from "../components/Anders.jpg";
function AndersHejlsberg() {
  return (
    <div className="contenedor">
      <div className="container">
        <h3>Anders Hejlsberg</h3>
        <img src={logo}></img>
        
          <b>

          Anders Hejlsberg, es un destacado ingeniero de software danés que
          co-diseñó varios lenguajes de programación de éxito comercial y
          herramientas de desarrollo de software. En 1983, mientras trabajaba en
          Borland, Anders desarrolló Turbo Pascal, un IDE de desarrollo que
          integraba un compilador para el lenguaje de programación Pascal,
          posteriormente fue el principal arquitecto de Delphi. En 1996 fue
          contratado por Microsoft, en el cual tuvo como objetivo liderar el
          
          proyecto de desarrollo del Lenguaje de Programación J++. A él se le
          atribuye la creación del Lenguaje de Programación C# (C Sharp) y desde
          el 2000 fue arquitecto principal del equipo que desarrolla este
          lenguaje. En el 2012, Hejlsberg lidera su nuevo proyecto de desarrollo
          de TypeScript, lenguaje de programación open source de Microsoft, del
          cual viene anunciando sus nuevas versiones en su cuenta de twitter.
          </b>
        
      </div>
    </div>
  );
}
export default AndersHejlsberg;
