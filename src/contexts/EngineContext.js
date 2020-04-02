import React, {createContext, useState, useReducer } from 'react';

import { guiClicksReducer } from '../reducers/guiClicksReducer';

export const EngineContext = createContext()


const EngineContextProvider = (props) => {
    const [enemyIsNext, setEnemyIsNext] = useState(true)
    const [inBattle, setInBattle] = useState(true)
    const [equippedWep, setEquippedWep] = useState()
    const [equippedAmr, setEquippedAmr] = useState()
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


    const [state, dispatch] = useReducer(guiClicksReducer)



    return ( 
        <EngineContext.Provider  value={{...[enemyIsNext, inBattle, equippedWep, equippedAmr], dispatch, storyBox}}>
            { props.children }
        </EngineContext.Provider>
        )
}
 
export default EngineContextProvider;