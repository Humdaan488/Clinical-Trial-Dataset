import React from "react";
import { MantineProvider } from "@mantine/core";
import DisplayTable from "./DisplayTable";
import "./App.css";
import vialLogo from "./viallogo-1.png";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <img src={vialLogo} alt="Vial Logo" className="top-left-logo" />
        <h1 className="center-text">Clinical Trial Dataset</h1>
        <div className="vision-statement center-text">
          OUR VISION IS TO EMPOWER SCIENTISTS TO CURE ALL HUMAN DISEASE.
        </div>
        <DisplayTable />
      </div>
    </MantineProvider>
  );
}

export default App;
