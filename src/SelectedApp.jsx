import React from 'react';
import { useTheme } from './ThemeContext';

export function SelectedApp(props) {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? 'rgb(211 255 214 / 67%)' : 'rgb(44 58 45 / 86%)',
  };

  return (
    <div style={themeStyles} className="p-4">
      <div className="counter text-center p-2 selection">
        <h2>Selection: {props.appName}</h2>
        <button className="btn btn-dark" onClick={props.onBackClick}>
          Back
        </button>
        <hr />
        <div>{props.children}</div>
      </div>
    </div>
  );
}
