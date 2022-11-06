import React, { useEffect, useContext } from "react";
import CalculatorContext from "./Context";

function Buttons() {
  const {
    currentValue,
    handlePositiveNegative,
    handleOperator,
    handleNumbers,
    handleClear,
    handleEquals,
  } = useContext(CalculatorContext);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];
  const decimal = ["."];
  const calculate = ["Enter"];

  return (
    <div className="buttons">
      <div className="grid-container">
        <div className="item1">{currentValue}</div>
        <div
          className="button bg-gray border-left border-top"
          onClick={() => {
            handleClear();
            handleClear();
          }}
        >
          C
        </div>
        <div
          className="button bg-gray border-left border-top"
          onClick={() => {
            handlePositiveNegative();
          }}
        >
          +/-
        </div>
        <div
          className="button bg-gray border-left border-top"
          onClick={() => {
            handleOperator("percent");
          }}
        >
          %
        </div>
        <div
          className="button bg-operator border-left border-top  border-right"
          onClick={() => {
            handleOperator("/");
          }}
        >
          /
        </div>
        <div
          className="button border-left border-top"
          onClick={() => {
            handleNumbers(7);
          }}
        >
          7
        </div>
        <div
          className="button border-left border-top"
          onClick={() => {
            handleNumbers(8);
          }}
        >
          8
        </div>
        <div
          className="button dkgray border-left border-top"
          onClick={() => {
            handleNumbers(9);
          }}
        >
          9
        </div>
        <div
          className="button bg-operator border-left border-top  border-right"
          onClick={() => {
            handleOperator("*");
          }}
        >
          *
        </div>
        <div
          className="button border-left border-top"
          onClick={() => {
            handleNumbers(4);
          }}
        >
          4
        </div>
        <div
          className="button border-left border-top"
          onClick={() => {
            handleNumbers(5);
          }}
        >
          5
        </div>
        <div
          className="button border-left border-top"
          onClick={() => {
            handleNumbers(6);
          }}
        >
          6
        </div>
        <div
          className="button bg-operator border-left border-top  border-right"
          onClick={() => {
            handleOperator("-");
          }}
        >
          -
        </div>
        <div
          className="button border-left border-top"
          onClick={() => {
            handleNumbers(1);
          }}
        >
          1
        </div>
        <div
          className="button border-left border-top"
          onClick={() => {
            handleNumbers(2);
          }}
        >
          2
        </div>
        <div
          className="button border-left border-top border-left "
          onClick={() => {
            handleNumbers(3);
          }}
        >
          3
        </div>
        <div
          className="button bg-operator border-top border-left border-right"
          onClick={() => {
            handleOperator("+");
          }}
        >
          +
        </div>
        <div
          className="item0 button border-left border-top border-bottom"
          onClick={() => {
            handleNumbers(0);
          }}
        >
          0
        </div>
        <div
          className="button border-left border-top border-bottom"
          onClick={() => {
            handleNumbers(".");
          }}
        >
          .
        </div>
        <div
          className="item3 button bg-operator border-left border-top  border-right border-bottom"
          onClick={() => {
            handleEquals();
          }}
        >
          =
        </div>
      </div>

      {/* <div className="operators">
        <button tabIndex="-1" onClick={() => Operator("+")}>
         
        </button>
        <button tabIndex="-1" onClick={() => Operator("-")}>
         
        </button>
        <button tabIndex="-1" onClick={() => Operator("*")}>
        
        </button>
        <button tabIndex="-1" onClick={() => Operator("/")}>
         
        </button>
      </div>
      <div className="digits">
        <CreateDigits />
       
        <button tabIndex="-1" onClick={() => Numbers(0)}>
          0
        </button>
        <button tabIndex="-1" onClick={Numbers(".")}>
          .
        </button>
      </div>
      <button className="handleclear-button" tabIndex="-1" onClick={handleClear}>
        AC
      </button>
      <button className="result-button" tabIndex="-1" onClick={Calculate}>
        =
      </button> */}
    </div>
  );

  function handleKey(e) {
    if (numbers.includes(e.key)) handleNumbers(e.key);
    if (operations.includes(e.key)) handleOperator(e.key);
    if (decimal.includes(e.key)) handleNumbers(".");
    if (calculate.includes(e.key)) handleEquals();
  }
}

export default Buttons;
