import React, {useState} from 'react'

export const guiClicksReducer = (state, action) => {
    // const targ = useState(enemyIsNext) ? 'enemys data' : 'players data'
    // const atker = useState(enemyIsNext) ? 'players data' : 'players data'
    // const totalDef = (targ.def +
    //     20 
    //     // equippedAmr.mainstat
    //     )
    switch(action.type){
        case 'ATK':
            return[
                // totalDmg =( atker.dmg + 
                //     20
                //     // equippedWep.mainstat 
                //     - totalDef),
                // this.setEnemyIsNext({enemyIsNext: !useState(enemyIsNext)}),
                // return this.targ.health - totalDmg
                // console.log(this.targ.health - totalDmg)
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