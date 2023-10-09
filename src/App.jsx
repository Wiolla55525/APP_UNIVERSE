import './App.css';
import React from 'react';
import { Hero } from './Hero.jsx';
import { AppList } from './AppList';
import { useState } from 'react';
import { SelectedApp } from './SelectedApp';
import { Counter } from './Counter';
import { Weather } from './Weather';
import { ThemeProvider } from './ThemeContext';
import { Inputs } from './Inputs';
import { Portal } from './PortalApp';
import { Counter2 } from './features/counter/Counter'

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [selectedApp, setApp] = useState(null);

  return (
    <div>
      <ThemeProvider>
        <Hero></Hero>
        {selectedApp ? (
          <SelectedApp appName={selectedApp} onBackClick={() => setApp(null)}>
            {selectedApp === 'Counter' && <Counter/>}
            {selectedApp === 'Weather' && <Weather/>}
            {selectedApp === 'Inputs' && <Inputs/>}
            {selectedApp === 'Portal' && <Portal/>}
            {selectedApp === 'ReduxCounter' && <Counter2/>}
            {!selectedApp && <b>`I am a text child node for children prop`</b>}
          </SelectedApp>
        ) : (
          <AppList setApplication={setApp} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
