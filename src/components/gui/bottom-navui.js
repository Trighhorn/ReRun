import React, { useContext, useState, useReducer } from "react";
import { EngineContext } from "../../contexts/EngineContext";

import { clicksObj } from "../../contexts/EngineContext"

  const BottomNavUi = (props) => {
    const {  enemyDidDef, setEnemyDidDef, playerDidDef, setPlayerDidDef, enemyCurrentHealth, setEnemyCurrentHealth, playerCurrentHealth, setPlayerCurrentHealth, inBattle, storyBox, setStoryBox, setEnemyIsNext, enemyIsNext }  = useContext(EngineContext)
    let player = {
      Health: playerCurrentHealth,
      dmg: 10,
      def: 10,
      didDef: playerDidDef,
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
      Health: enemyCurrentHealth,
      dmg: 10,
      def: 10,
      didDef: enemyDidDef,
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
        if (turnChance > 7) {
          setStoryBox('Enemy gets ready to block')
          setEnemyDidDef(true)
          postStats()
          setEnemyIsNext(!enemyIsNext)
          setPlayerDidDef(false)
        }else ( turnChance <= 7 ); {
          setPlayerCurrentHealth(playerCurrentHealth - enemyTotalDmg)
          setStoryBox(`Enemy Dealt ${enemyTotalDmg} damage`)
          postStats()
          if (playerCurrentHealth <= 0) {
            setPlayerCurrentHealth(0)
            setStoryBox(`it picks you up. Its gaping maw was so much worse than you thought the last thing you hear is a sickening crunch... Refresh to play again `)
          }
          setEnemyIsNext(!enemyIsNext)
          setPlayerDidDef(false)
        }
    }

    function handleClick(filter) {
      const playerTotalDmg = player.dmg + player.equippedWep.main_stat - (enemy.didDef ? 10 : 0 )
      if (enemyIsNext) {
        switch(filter) {
          case 'ATK':
            setStoryBox(`You Deal ${playerTotalDmg} Damage`) 
            setEnemyCurrentHealth(enemyCurrentHealth - playerTotalDmg)
            postStats()
            if (enemyCurrentHealth <= 0) {
              setEnemyCurrentHealth(0)
              setStoryBox(`You win! Please refresh to try again`)
            }
            setEnemyDidDef(false)
            setEnemyIsNext(!enemyIsNext)
            break;
            case 'DEF':
              console.log(enemy.Health) 
              setPlayerDidDef(true)
              setStoryBox('You brace for a hit')
              postStats()
              setEnemyDidDef(false)
              setEnemyIsNext(!enemyIsNext)
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