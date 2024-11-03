import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme, { injectThemeVariables } from "./styles/theme";
// import "./styles/global.css";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import MainContent from './components/MainContent';

const App = () => {
  useEffect(() => {
    injectThemeVariables();
  }, []);

  return (
    <ThemeProvider theme={theme}>

      <div className="app-body-frame">

        <div className="app-head-frame">
          <Header />
        </div>
        
        <div className="app-main-frame">
          <div>
            <h1>Welcome to my app, this is a React Gift App</h1>
            <button>Click me!</button>
          </div>
        </div>

        <div className="app-footer-frame">
          <Footer />
        </div>
      </div>
      
    </ThemeProvider>
  );
};

export default App;
