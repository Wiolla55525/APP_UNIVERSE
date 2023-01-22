import React from 'react';
import { useThemeUpdate } from './ThemeContext';
import './App.css';

export function ToggleButton() {
  const toggleTheme = useThemeUpdate();

  return (
    <div>
      <label className="switch" onChange={toggleTheme}>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
