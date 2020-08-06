import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: FC = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
