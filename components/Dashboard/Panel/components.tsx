import dynamic from "next/dynamic";

const PanelComponents = {
  MainPanel: dynamic(() => import("./main-panel"), {}),
};

export default PanelComponents;
