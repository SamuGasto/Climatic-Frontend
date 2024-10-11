import BackendData from "@/types/backend-data";
import { Chart } from "@/types/chart";
import { Consulta } from "@/types/consulta";
import { useBoardStore } from "./Stores/boardStore";
import axios from "axios";

export async function SendQuery(chart: Chart, consulta: Consulta) {
  const { userData, id_boardSelected, updateChart } = useBoardStore.getState();

  let backendData: BackendData = {
    latitude: [],
    longitude: [],
    data: [],
    image: "",
    units: "",
  };

  try {
    backendData = await axios.get(`http://127.0.0.1:8000/${consulta}`);
  } catch (error) {
    console.error(error);
  }

  updateChart(userData[id_boardSelected], chart, backendData);
}
