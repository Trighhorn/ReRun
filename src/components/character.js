import React, { Component } from "react";

import Inventory from "./items/inventory";

export default class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      inventory_id: "",
      health: 100,
      dmg: 10,
      amr: 10,
      level: 1,
      equipped_wep: 1,
      equipped_amr: 2,
    };
  }

  componentDidMount() {
    this.setState({
      user_id: 1,
      inventory_id: 1
    });
  }


  render() {
    return (
      <div>
        <div>Character Inventory</div>
        <Inventory />
      </div>
    );
  }
}
