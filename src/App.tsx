import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme, { injectThemeVariables } from './styles/theme';
import './styles/global.css';
import './app.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import MainContent from './components/MainContent';

const App = () => {
  useEffect(() => {
    injectThemeVariables();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='header-root'>
        <Header />
      </div>
        
      <div className="main-root">
          <div>
            <button>Click me!</button>
            <h1>Welcome to my app, this is a React Gift App</h1>
          </div>
      </div>
          
        
       <div className='footer-root'>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;