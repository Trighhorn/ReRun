import React, {createContext, useState, useReducer } from 'react';


export const EngineContext = createContext()

export const clicksObj = {
    totalHealth: 100,
    totalDef: () =>  console.log("defended"),
    totalDmg: () => 15 + 20 - totalDef(),
    attack: () => console.log('ATTACKED'),
    defend: () => console.log('DEFENDED'),


}


const EngineContextProvider = (props) => {
    const [enemyIsNext, setEnemyIsNext] = useState(true)
    const [inBattle, setInBattle] = useState(true)
    const [equippedWep, setEquippedWep] = useState("")
    const [equippedAmr, setEquippedAmr] = useState("")
    const [storyBox, setStoryBox] = useState('This is a place holder for nodes holding text')
    const [player, setPlayer] = useState({
        totalHealth: 100,
        currentHealth: null,
        equippedWep: {
            id: 1,
            main_stat: 7
        },
        equippedAmr: {
            id: 1,
            main_stat: 7
        }
    })
    const [enemy, setEnemy] = useState({
        name: 'Cartoon Cat',
        desc: 'A creature',
        totalHealth: 100,
        currentHealth: null,
        equippedWep: {
            //spread data in ...
            id: 1,
            main_stat: 15
        },
        equippedAmr: {
            //spread data in ...
            id: 1,
            main_stat: 15
        }
    })

    const handleEnemyIsNext = () => {
        setEnemyIsNext(!enemyIsNext)
    }



    return ( 
        <EngineContext.Provider  value={{clicksObj, enemyIsNext, setEnemyIsNext, inBattle, equippedWep, equippedAmr, player, enemy, storyBox, setStoryBox}}>
            { props.children }
        </EngineContext.Provider>
        )
}
 
export default EngineContextProvider;