import React, {createContext, useState, useReducer } from 'react';


export const EngineContext = createContext()

export const clicksObj = {
    clicks: 0,
    totalHealth: 100,
    maxHealth: 100,
    totalDef: () =>  10 - 6,
    totalDmg: () => 15 + 20 - clicksObj.totalDef(),
    attack: () => clicksObj.totalHealth - clicksObj.totalDmg(),
    defend: () => clicksObj.attack() + 20,
    settings: () => (document.getElementById('story-text').style.color = 'red')

}


const EngineContextProvider = (props) => {
    const [enemyIsNext, setEnemyIsNext] = useState(true)
    const [inBattle, setInBattle] = useState(true)
    const [storyBox, setStoryBox] = useState('Welcome to My game Press Attack or Defend to start to start the battle')


    const handleEnemyIsNext = () => {
        setEnemyIsNext(!enemyIsNext)
    }



    return ( 
        <EngineContext.Provider  value={{ enemyIsNext, setEnemyIsNext, inBattle, storyBox, setStoryBox}}>
            { props.children }
        </EngineContext.Provider>
        )
}
 
export default EngineContextProvider;