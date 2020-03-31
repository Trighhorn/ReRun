import React, { Component } from "react";
import Item from "./item";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory_id: 1,
      equipped_wep: {
        id: null,
        main_stat: null
      },
      equipped_amr: {
        id: null,
        main_stat: null
      }
    };
  }
  render() {
    var knife = {
      id: 1,
      type: "wep",
      name: "knife",
      main_stat: 7,
      tier: 2,
      equipped: true,
      equip_region: "wep"
    };
    var jacket = {
      id: 2,
      type: "amr",
      name: "jacket",
      main_stat: 3,
      tier: 1,
      equipped: true,
      equip_region: "amr"
    };
    var med_pot = {
      id: 3,
      type: "uti",
      name: "Medium Health Potion",
      main_stat: 20,
      tier: 2
    };
    var key = {
      id: 4,
      type: "key",
      name: "Blood Stained Key",
      main_stat: null,
      tier: 4
    };
    var gloves = {
      id: 5,
      type: "amr",
      name: "Pristine Gloves",
      main_stat: 15,
      tier: 4
    };
    return (
      <div className="App">
        <Item item={knife} />
        <Item item={jacket} />
        <Item item={med_pot} />
        <Item item={key} />
        <Item item={gloves} />
      </div>
    );
  }
}
