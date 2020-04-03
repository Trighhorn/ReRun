import React, { useContext } from 'react'; 

import { EngineContext } from '../contexts/EngineContext'
const enemyChar = () => {
    const { inBattle, storyBox, setStoryBox, setEnemyIsNext, enemyIsNext, enemy, player }  = useContext(EngineContext)
    return(doTurn(turnChance))
}
export default enemyChar;