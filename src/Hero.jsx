import bcg1 from './img/bcg1.jpg';
import './App.css';
import { ToggleButton } from './Toggle';

export function Hero() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${bcg1})` }}>
      <h2 className="header-section">Welcome To My Page</h2>
      <ToggleButton />
    </div>
  );
}
