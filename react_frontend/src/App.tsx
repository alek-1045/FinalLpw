import React from 'react';
import Dashboard from './pages/Dashboard'
import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>

)

export default App;

