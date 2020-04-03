import React, { useContext, useState, useReducer } from "react";
import { EngineContext } from "../../contexts/EngineContext";

import { clicksObj, guiClicksReducer } from "../../reducers/guiClicksReducer"

  const BottomNavUi = (props) => {
    const { inBattle, storyBox, setStoryBox, clicksObj, setEnemyIsNext, enemyIsNext, enemy }  = useContext(EngineContext)

    function handleClick(filter) {
      switch(filter){
        case 'ATK':
          return(clicksObj.attack())
        case "DEF":
          return(clicksObj.defend())
        case "ESC":
          return(setStoryBox("Cant run away in current Build"))
        case "INV":
          return(setStoryBox("Cant change items in current build"))
        case "INS":
          setStoryBox(enemy.desc)

      }
      setEnemyIsNext(!enemyIsNext)
    }
    
    return (
      <div className="bottom-nav">
        <div id="story-text">
          {storyBox}
        </div>
        <div className="btn-container">
          {!inBattle ? (
            <div className="cardinal-container">
              <button>North</button>
              <button>East</button>
              <button>South</button>
              <button>West</button>
            </div>
          ) : (
            <div className="battle-container">
              <button onClick={() => handleClick('ATK')}>Attack</button>
              <button onClick={() => handleClick('DEF')}>Defend</button>
              <button onClick={() => handleClick('ESC')}>Run</button>
              {/* <button onClick={() => dispatch({type: ''})}>Defend</button>
              <button onClick={() => dispatch({type: ''})}>Run</button> */}
            </div>
          )}
           <button onClick={() => handleClick('INV')}>Items</button>
           <button onClick={() => handleClick('INS')}>Inspect</button>
          {/* <button onClick={() => dispatch({type: 'INS'})}>Inspect</button> */}
        </div>
      </div>
    );
}

export default BottomNavUi;