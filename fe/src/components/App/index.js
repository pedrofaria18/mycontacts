import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
