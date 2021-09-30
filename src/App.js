import "./App.css";

import Botoes from "./botoes.js";
//13/09/2021 FRONT FINALIZADO, FALTA COLOCAR AS FUNCOES NOS BOTOES

function App() {
  return (
    <body>
      <div className="main">
        <header className="header">
          <h4 className="header">sgurd calculus</h4>
        </header>

        <section className="res">
          <h1 id="res">{Botoes.resultado}</h1>
        </section>

        <section className="calc">
          <div className="botoes">
            <button onClick={Botoes.sete}>7</button>
            <button>8</button>
            <button>9</button>
            <button id="res-del">del</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button>/</button>
            <button>x</button>
          </div>
          <div className="botoes-final">
            <button id="res-del">reset</button>
            <button id="botao-resultado">=</button>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
