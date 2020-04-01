import React, {createContext, useState, useReducer } from 'react';

import { guiClicksReducer } from '../reducers/guiClicksReducer';

export const EngineContext = createContext()


const EngineContextProvider = (props) => {
    const [enemyIsNext, setEnemyIsNext] = useState(true)
    const [inBattle, setInBattle] = useState(true)
    const [equippedWep, setEquippedWep] = useState()
    const [equippedAmr, setEquippedAmr] = useState()


    const [state, dispatch] = useReducer(guiClicksReducer)

    // function clickAction(act) {
    //     if (act === "ATK") {
    //         totalDmg =( atker.dmg + 
    //             20
    //             // equippedWep.mainstat 
    //             - totalDef)
    //         this.setEnemyIsNext({enemyIsNext: !enemyIsNext})
    //         // return this.targ.health - totalDmg
    //         console.log(this.targ.health - totalDmg)
    //     } if (act === "DEF") {
    //         totalDmg = (atker.dmg + 
    //             20
    //             // equippedWep.mainstat 
    //             - (totalDef + 20))
    //         this.setEnemyIsNext({enemyIsNext: !enemyIsNext})
    //         return this.targ.health - totalDmg
    //     }if (act === "ESC") {
    //         escChance = math.random() * 10
    //         if (escChance > 6) {
    //             setInbattle(false)
    //         }
    //     }if (act === "SET") {
    //         // open react modal
    //     }
    // }
    return ( 
        <EngineContext.Provider  value={{...[enemyIsNext, inBattle, equippedWep, equippedAmr], dispatch}}>
            { props.children }
        </EngineContext.Provider>
        )
}
 
export default EngineContextProvider;