import { React, useState, useRef } from 'react';

export function Inputs() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [mathOperator, setmathOperator] = useState('');
  const operator = useRef();
  const [result1, setResult1] = useState();

  function resetButton() {
    setValue('');
    setValue2('');
  }

  const operatorClickHandler = (e) => {
    const operator = e.target.value;
    setmathOperator(operator);
  };

  function handleMath(operator, a, b) {
    return operator === '+'
      ? Number(a) + Number(b)
      : operator === '-'
      ? Number(a) - Number(b)
      : operator === '*'
      ? Number(a) * Number(b)
      : Number(a) / Number(b);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setResult1(handleMath(operator.current.value, inputRef.current.value, inputRef2.current.value));
  }

  return (
    <div className="row">
      <div className="col">
        <div className="fst-italic my-2">Uncontrolled math</div>
        <div className="calculations align-items-center justify-content-center">
          <div className="py-2 row d-flex m-2">
            <input ref={inputRef} type={'number'} className="col " />
            <select ref={operator} className="col ">
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
            <input ref={inputRef2} type={'number'} className="col " />
          </div>

          <button onClick={handleSubmit} className="btn btn-secondary w-50" type="submit">
            Submit
          </button>
        </div>
        <div className="result my-2">Result: {result1} </div>
      </div>

      <div className="col">
        <div className="fst-italic my-2">Controlled math</div>
        <div className="calculations my-3">
          <div className="">
            <div className="row m-2">
              <input type={'number'} value={value} onChange={(e) => setValue(e.target.value)} className="col" />
              <select value={mathOperator} className="col" onChange={(e) => operatorClickHandler(e)}>
                <option value={'+'}>+</option>
                <option value={'-'}>-</option>
                <option value={'*'}>*</option>
                <option value={'/'}>/</option>
              </select>
              <input type={'number'} value={value2} onChange={(e) => setValue2(e.target.value)} className="col" />
            </div>
            <button onClick={() => resetButton()} className="btn btn-secondary w-50">
              Reset
            </button>
          </div>
        </div>
        <div className="result my-2">
          Result:
          {handleMath(mathOperator, Number(value), Number(value2))}
        </div>
      </div>
    </div>
  );
}
