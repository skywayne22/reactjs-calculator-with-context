import { createContext, useState } from "react";
const CalculatorContext = createContext();

export function Context({ children }) {
  const [operator, setOperator] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [prevValue, setPrevValue] = useState("0");
  const [newNumber, setnewNumber] = useState(true);

  function handlePositiveNegative(e) {
    setCurrentValue(currentValue * -1 + "");
  }

  function handleOperator(_operator) {
    switch (_operator) {
      case "percent":
        let percent = currentValue * 0.01 + "";
        if (percent.length < 25) setCurrentValue(percent);
        break;
      default:
        setOperator(_operator);
        if (prevValue != 0 && operator != "") handleCalculate();
        else setPrevValue(currentValue);
        break;
    }
  }

  function handleNumbers(num) {
    
    if (parseFloat(currentValue) == 0 && operator.length == 0) {
      if (num === ".") {
        setCurrentValue("0.");
      } else {
        if (currentValue != "0")
          currentValue.includes(".")
            ? setCurrentValue(currentValue + "" + num)
            : setCurrentValue(num);
        else setCurrentValue(num);
      }
    } else {
      if (operator.length == 0) {
        if (num === ".") {
          if (!currentValue.includes(".")) {
            setPrevValue(currentValue);
            setCurrentValue(currentValue + "" + num);
          }
        } else {
          setPrevValue(currentValue);
          setCurrentValue(currentValue + "" + num);
        }
      } else {
        if (num === ".") {
          setCurrentValue("0.");

          if (!currentValue.includes(".")) {
            setPrevValue(currentValue);
            setCurrentValue(currentValue + "" + num);
          }
        } else {
          if (newNumber) {
            setPrevValue(currentValue);
            setCurrentValue(num);
            setnewNumber(false);
          } else {
            setCurrentValue(currentValue + "" + num);
          }
        }
      }
    }
  }

  function handleClear(e) {
    setCurrentValue("0");
    setPrevValue(0);
    setOperator("");
  }

  function handleEquals() {
    handleCalculate();
    setPrevValue(0);
    setOperator("");
  }

  function handleCalculate() {
    if (prevValue != 0) {
      var val = 0;
      switch (operator) {
        case "+":
          val = parseFloat(prevValue) + parseFloat(currentValue);
          break;
        case "-":
          val = parseFloat(prevValue) - parseFloat(currentValue);
          break;
        case "*":
          val = parseFloat(prevValue) * parseFloat(currentValue);
          break;
        case "/":
          val = parseFloat(prevValue) / parseFloat(currentValue);
          break;
      }
      setCurrentValue(val);
      setPrevValue(val);
      setnewNumber(true);
    }
  }

  return (
    <CalculatorContext.Provider
      value={{
        currentValue,
        handlePositiveNegative,
        handleOperator,
        handleNumbers,
        handleClear,
        handleEquals,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorContext;
