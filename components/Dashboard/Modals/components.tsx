import dynamic from "next/dynamic";

const Modal = {
  confirm: dynamic(() => import("./modal-confirm"), {}),
  create_board: dynamic(() => import("./modal-create-board"), {}),
  create_chart: dynamic(() => import("./modal-create-chart"), {}),
  edit_board: dynamic(() => import("./modal-edit-board"), {}),
};

export default Modal;
