import React from "react";
import "./styles/App.scss";

import Character from "./components/character";
import BottomNavUi from "./components/gui/bottom-navui";
import UpperNavUi from "./components/gui/upper-navui";
import EngineContextProvider from "./contexts/EngineContext";

export default function App() {
  return (
    <div className="App">
      <EngineContextProvider>
        <UpperNavUi />
        <Character />
        <BottomNavUi />
      </EngineContextProvider>
    </div>
  );
}
