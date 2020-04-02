import React, { useContext, useState } from "react";
import { EngineContext } from "../../contexts/EngineContext";

  const BottomNavUi = (props) => {
    const { inBattle, dispatch, storyBox }  = useContext(EngineContext)
    const storyText = useState(storyBox)
    return (
      <div className="bottom-nav">
        <div id="story-text">
          {storyText}
        </div>
        <div className="btn-container">
          {!useState(inBattle) ? (
            <div className="cardinal-container">
              <button>North</button>
              <button>East</button>
              <button>South</button>
              <button>West</button>
            </div>
          ) : (
            <div className="battle-container">
              <button onClick={() => dispatch({type: 'ATK'})}>Attack</button>
              <button onClick={() => dispatch({type: 'DEF'})}>Defend</button>
              <button onClick={() => dispatch({type: 'ESC'})}>Run</button>
            </div>
          )}
          <button onClick={() => dispatch({type: 'INV'})}>Items</button>
          <button onClick={() => dispatch({type: 'INS'})}>Inspect</button>
        </div>
      </div>
    );
}

export default BottomNavUi;