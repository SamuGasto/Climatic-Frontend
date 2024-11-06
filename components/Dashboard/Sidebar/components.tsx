import dynamic from "next/dynamic";

const SidebarComponents = {
  Sidebar: dynamic(() => import("./sidebar"), { ssr: false }),
};

export default SidebarComponents;
