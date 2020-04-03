import React, { useContext, useState, useReducer } from "react";
import { EngineContext } from "../../contexts/EngineContext";

import { clicksObj } from "../../contexts/EngineContext"

  const BottomNavUi = (props) => {
    const { inBattle, storyBox, setStoryBox, setEnemyIsNext, enemyIsNext }  = useContext(EngineContext)
    let player = {
      Health: 100,
      dmg: 10,
      def: 10,
      didDef: false,
      equippedWep: {

          main_stat: 7
      },
      equippedAmr: {
          main_stat: 7
      }
    }
    let enemy = {
      name: 'Cartoon Cat',
      desc: `A creature out of your nightmares stares back at you. 
      It resembles an old cartoon feline from nearly a century ago with a few key differences.
       It's grin is wide enough for you to see its exposed gums and yellow teeth thick saliva dripping from one of them. 
       it towers over you easily being taller than the room, Its staring right at you its intent clear. 
       its appendages resemble thick rubber hoses topped with pristine gloves that remind you of a certain character.`,
      Health: 100,
      dmg: 10,
      def: 10,
      didDef: false,
      equippedWep: {
          main_stat: 10
      },
      equippedAmr: {
          main_stat: 10
      }
    }

    const postStats = () => {
      document.getElementById('stats-container').innerHTML= (`Your Health: ${player.Health}       Enemy Health: ${enemy.Health}`)
    }
    const turnChance = Math.floor((Math.random() * 10))
    const doTurn = (turnChance) => {
      const enemyTotalDmg = enemy.dmg + enemy.equippedWep.main_stat - (player.didDef ? 10 : 0 )
        console.log('Doing turn')
        if (turnChance > 7) {
          console.log('Defended')
          postStats()
          setEnemyIsNext(!enemyIsNext)
          player.didDef = false
        }else ( turnChance <= 7 ); {
          player.Health -= enemyTotalDmg
          setStoryBox('Enemy ATTACKED')
          postStats()
          setEnemyIsNext(!enemyIsNext)
          player.didDef = false
        }
    }

    function handleClick(filter) {
      const playerTotalDmg = player.dmg + player.equippedWep.main_stat - (enemy.didDef ? 10 : 0 )
      if (enemyIsNext) {
        switch(filter) {
          case 'ATK':
            setStoryBox(`You Deal ${playerTotalDmg} Damage`) 
            console.log(enemy.Health) 
            enemy.Health -= playerTotalDmg
            postStats()
            // setEnemyIsNext(!enemyIsNext)
            break;
            case 'DEF':
              console.log(enemy.Health) 
              player.didDef = true
              setStoryBox('You brace for a hit')
              postStats()
              // setEnemyIsNext(!enemyIsNext)
              break;
            case 'ESC':
                postStats()
                setStoryBox("Cant run away in current Build")
                break;
            case 'INV':
                postStats()
                setStoryBox("Cant change items while in battle")
                break;
            case 'INS':
                postStats()
                setStoryBox(enemy.desc)
                break;
            default:
              setStoryBox("Not A Button")  
        }
      }else {
        doTurn(turnChance)
        player.Health
      }
    }
    
    return (
      <div className="bottom-nav">
        <div id="story-text">
          {storyBox}
        </div>
        <div id='stats-container'>
           Your Health: {player.Health}       Enemy Health: {enemy.Health}
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