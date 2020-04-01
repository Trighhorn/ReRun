import React, { useContext, useState } from "react";
import { EngineContext } from "../../contexts/EngineContext";

 const  UpperNavUi = () => {
  const { dispatch }  = useContext(EngineContext)
    return (
      <div className="top-nav">
        <div className="title"> ReRun </div>
        <button onClick={() => dispatch({type: 'SET'})} className="settings-nav-btn"> Settings </button>
      </div>
    );
}


export default UpperNavUi;