import React from "react";
import BoardPanel from "./board/has-board";

function MainPanel() {
  return (
    <div className="flex w-full h-full -mt-16 ">
      <BoardPanel />
    </div>
  );
}

export default MainPanel;
