import React, { Component, createContext} from 'react';

export const EngineContext = createContext()


class EngineContextProvider extends Component {
    state = { 
        equippedWep: this.state.equippedwep.id,
        enemyIsNext: true,
        inBattle: true
     }
     clickAction(act) {
        const targ = enemyIsNext ? 'enemy' : 'player'
        const atker = enemyIsNext ? 'player' : 'enemy'
        totalDef = targ.def + equippedAmr.mainstat
        if (act === "ATK") {
            totalDmg = atker.dmg + equippedWep.mainstat - totalDef
            return this.targ.health - totalDmg
        } if (act === "DEF") {
            totalDmg = atker.dmg + equippedWep.mainstat - (totalDef + 20)
            return this.targ.health - totalDmg
        }
        this.setState({enemyIsNext: !this.state.enemyIsNext})
    }
    render() { 
        return ( 
            <EngineContext.Provider  value={{...this.state, clickAction: this.clickAction}}>
                { this.props.children }
            </EngineContext.Provider>
         );
    }
}
 
export default EngineContextProvider;