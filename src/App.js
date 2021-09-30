import "./App.css";
import { useState } from "react";

import Botoes from "./botoes.js";
//13/09/2021 FRONT FINALIZADO, FALTA COLOCAR AS FUNCOES NOS BOTOES

function App() {
  let [resultado, setResultado] = useState("");
  let [parteum, setParteum] = useState("");
  let [operador, setOperador] = useState("");

  function sete() {
    setResultado(resultado + "7");
  }

  function oito() {
    setResultado(resultado + "8");
  }
  function nove() {
    setResultado(resultado + "9");
  }
  function quatro() {
    setResultado(resultado + "4");
  }
  function cinco() {
    setResultado(resultado + "5");
  }
  function seis() {
    setResultado(resultado + "6");
  }
  function um() {
    setResultado(resultado + "1");
  }
  function dois() {
    setResultado(resultado + "2");
  }
  function tres() {
    setResultado(resultado + "3");
  }
  function zero() {
    setResultado(resultado + "0");
  }
  function reset() {
    setResultado("");
  }
  function del() {
    const str = resultado;
    const str2 = str.replace(/.$/, "");
    setResultado(str2);
  }
  function ponto() {
    setResultado(resultado + ".");
  }
  function mais() {
    setParteum(resultado);
    setOperador("+");
    setResultado("");
  }
  function menos() {
    setParteum(resultado);
    setOperador("-");
    setResultado("");
  }
  function divisao() {
    setParteum(resultado);
    setOperador("/");
    setResultado("");
  }
  function multiplicacao() {
    setParteum(resultado);
    setOperador("x");
    setResultado("");
  }

  function final() {
    if (operador === "+") {
      setResultado(Number(parteum) + Number(resultado));
    } else if (operador === "-") {
      setResultado(Number(parteum) - Number(resultado));
    } else if (operador === "/") {
      if (resultado === "0") {
        setResultado("Não é possível realizar divisão por 0");
      } else if (resultado === "") {
        setResultado("Não foi definido nenhum valor para o divisor");
      } else {
        setResultado(Number(parteum) / Number(resultado));
      }
    } else if (operador === "x") {
      setResultado(Number(parteum) * Number(resultado));
    }
  }

  return (
    <body>
      <div className="main">
        <header className="header">
          <h4 className="header">sgurd calculus</h4>
        </header>

        <section className="res">
          <h1 id="res">{resultado}</h1>
        </section>

        <section className="calc">
          <div className="botoes">
            <button onClick={sete}>7</button>
            <button onClick={oito}>8</button>
            <button onClick={nove}>9</button>
            <button onClick={del} id="res-del">
              del
            </button>
            <button onClick={quatro}>4</button>
            <button onClick={cinco}>5</button>
            <button onClick={seis}>6</button>
            <button onClick={mais}>+</button>
            <button onClick={um}>1</button>
            <button onClick={dois}>2</button>
            <button onClick={tres}>3</button>
            <button onClick={menos}>-</button>
            <button onClick={ponto}>.</button>
            <button onClick={zero}>0</button>
            <button onClick={divisao}>/</button>
            <button onClick={multiplicacao}>x</button>
          </div>
          <div className="botoes-final">
            <button onClick={reset} id="res-del">
              reset
            </button>
            <button onClick={final} id="botao-resultado">
              =
            </button>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
