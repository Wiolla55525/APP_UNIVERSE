import './App.css';
import { useTheme } from './ThemeContext';

export function AppCard(props) {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? 'rgb(231 240 231)' : 'rgb(100 135 103 / 86%)',
  };

  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(231 240 231)' : 'rgb(74 100 76 / 74%)',
  };

  return (
    <div className="card" style={cardStyles} onClick={props.onClick}>
      <img src={props.img} alt="" className="image" />
      <div className="text" style={themeStyles}>
        <h5> {props.text}</h5>
      </div>
    </div>
  );
}
