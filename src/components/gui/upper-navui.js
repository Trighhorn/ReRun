import React from "react";
import { clicksObj } from "../../contexts/EngineContext";

 const  UpperNavUi = () => {

    return (
      <div className="top-nav">
        <div className="title"> ReRun </div>
        <button onClick={() => clicksObj.settings()} className="settings-nav-btn"> Settings </button>
      </div>
    );
}


export default UpperNavUi;