import React, {useState, useContext} from 'react'

// import { EngineContext } from "../contexts/EngineContext";



export const guiClicksReducer = (state, action) => {
    // const { enemyIsNext, player, enemy }  = useContext(EngineContext)
    // const targ = enemyIsNext ? enemy : player
    // const atker = !enemyIsNext ? player : enemy
    
    const totalDef = (
        // targ.def 
        10
        +
        20 
        //targ.equippedAmr.mainstat
        )
    const totalHealth = 100;
    const totalDmg =( 
        (15
        // atker.dmg 
        + 
        20)
        // atker.equippedWep.mainstat 
        - 
        totalDef
        )
        
        switch(action.type){
            case 'ATK':
                return[
                // currentHealth = totalHealth,
                // currentHealth = (currentHealth - totalDmg),
                // // this.setEnemyIsNext({enemyIsNext: !useState(enemyIsNext)}),
                // // this.targ.health - totalDmg
                // console.log(currentHealth)
                console.log('ATTACK BUTTON CLICKED')
            ]
        case 'DEF':
            return[
                // totalDmg = (atker.dmg + 
                //     20
                //     // equippedWep.mainstat 
                //     - (totalDef + 20)),
                // this.setEnemyIsNext({enemyIsNext: !useState(enemyIsNext)}),
                // // this.targ.health - totalDmg
                // console.log(this.targ.health - totalDmg)
                console.log('DEFEND BUTTON CLICKED')
            ]
        case 'ESC':
            return [
                // TODO GET RUN TO WORK
                // escChance = (math.random() * 10),
                // escChance > 6 ? {
                //     setInbattle(false)
                // } : null
                console.log('That is unavailable in this current build')
            ]
        case 'SET':
            return [
                // open react modal for settings
                console.log('SETTINGS BUTTON CLICKED')
            ]
        case 'INV':
            return [
                // open react modal for settings
                console.log('ITEMS BUTTON CLICKED')
            ]
        case 'INS':
            return [
                // open react modal for settings
                console.log('INSPECT BUTTON CLICKED')
            ]
        default:
            console.log("HOW? I GAVE YOU SET BUTTONS HOW?")
    }
}