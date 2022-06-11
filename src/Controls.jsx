import React from "react";

export default function Controls({ drumId }) {
  return (
    <div className="d-flex" id="controls">
      <h2 className="text-light">Controls</h2>
      
        <div className="d-flex justify-content-center align-items-center mx-2 text-primary text-wrap border border-light" id="display">
          {drumId}
        
      </div>
    </div>
  );
}
