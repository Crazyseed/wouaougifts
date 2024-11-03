import { useEffect, useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme, { injectThemeVariables } from "./styles/theme";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import BasicModal from "./components/Basic-Modal";

const App = () => {
  const handleOpenRef = useRef<() => void>(() => {});

  useEffect(() => {
    injectThemeVariables();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="app-body-frame">
        <div className="app-head-frame">
          <Header handleOpen={() => handleOpenRef.current()} />
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
        <BasicModal handleOpen={(fn) => (handleOpenRef.current = fn)} />
      </div>
    </ThemeProvider>
  );
};

export default App;