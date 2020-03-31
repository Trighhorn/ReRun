import React, { Component } from "react";

export default class BottomNavUi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inBattle: true
    };
  }
  render() {
    return (
      <div className="bottom-nav">
        <div className="story-text">
          This is a place holder for nodes holding text
        </div>
        <div className="btn-container">
          {!this.state.inBattle ? (
            <div className="cardinal-container">
              <button>North</button>
              <button>East</button>
              <button>South</button>
              <button>West</button>
            </div>
          ) : (
            <div className="battle-container">
              <button >Attack</button>
              <button >Defend</button>
              <button >Run</button>
            </div>
          )}
          <button>Items</button>
          <button>Inspect</button>
        </div>
      </div>
    );
  }
}
