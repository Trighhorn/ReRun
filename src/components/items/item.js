import React from "react";

const Item = props => {
  const { type, name, main_stat, tier } = props.item;

  function StatIdentifier(type) {
    switch (type) {
      case "wep":
        return "DMG:";
      case "amr":
        return "DEF: ";
      case "uti":
        return "HEAL: ";
      case "key":
        return null;
      default:
        return "INVALID CLASS";
    }
  }

  function TypeIdentifier(type) {
    switch (type) {
      case "wep":
        return "Weapon";
      case "amr":
        return "Armor";
      case "uti":
        return "Utility";
      case "key":
        return "Key";
      default:
        return "INVALID CLASS";
    }
  }

  function RarityIdentifier(tier) {
    switch (tier) {
      case 1:
        return "Common";
      case 2:
        return "Uncommon";
      case 3:
        return "Rare";
      case 4:
        return "Calling Card";
      default:
        return "INVALID CLASS";
    }
  }

  return (
    <div className="item-card">
      <div>Name: {name}</div>
      <div>Type: {TypeIdentifier(type)}</div>
      <div>
        {StatIdentifier(type)}
        {main_stat}
      </div>
      <div>Rarity: {type === "key" ? "KEY" : RarityIdentifier(tier)}</div>
    </div>
  );
};

export default Item;
