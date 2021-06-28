import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Show from './Components/pages/Show';
import Home from './Components/pages/Home';
import Starred from './Components/pages/Starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
    redsalsa: '#f03a47ff',
    redwood: ' #af5b5bff',
    cultured: '#f6f4f3ff',
    celticblue: ' #276fbfff',
    spacecadet: '#183059ff',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/starred">
          <Starred />
        </Route>

        <Route exact path="/show/:id">
          <Show />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
