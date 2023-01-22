import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export function Counter() {
  const [counter, setCount] = useState(0);

  return (
    <div className="counter text-center p-2 m-auto">
      <HeadingLevel3>Times clicked:</HeadingLevel3>
      <p>{counter}</p>
      <button
        data-testid={'button-test'}
        className="btn btn-dark"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        Click me
      </button>
    </div>
  );
}

const HeadingLevel3 = styled.h3`
  color: lime;
`;
