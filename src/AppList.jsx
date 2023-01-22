import './App.css';
import { AppCard } from './AppCard';
import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.jpg';
import pic4 from './img/pic4.jpg';
import pic5 from './img/pic5.jpg';
import pic6 from './img/pic6.jpg';
import { useTheme } from './ThemeContext';

export function AppList(props) {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? 'rgb(211 255 214 / 67%)' : 'rgb(44 58 45 / 86%)',
    color: darkTheme ? 'rgb(78 74 74)' : 'rgb(226 225 225)',
  };

  return (
    <div className="grid" style={themeStyles}>
      <AppCard onClick={() => props.setApplication('Counter')} img={pic1} text={'Counter'} />
      <AppCard onClick={() => props.setApplication('Weather')} img={pic2} text={'Weather'} />
      <AppCard onClick={() => props.setApplication('Inputs')} img={pic3} text={'Inputs'} />
      <AppCard onClick={() => props.setApplication('Portal')} img={pic4} text={'Portal'} />
      <AppCard onClick={() => props.setApplication('ReduxCounter')} img={pic5} text={'ReduxCounter'} />
      <AppCard onClick={() => props.setApplication('Click app-6')} img={pic6} text={'App-6'} />
    </div>
  );
}
