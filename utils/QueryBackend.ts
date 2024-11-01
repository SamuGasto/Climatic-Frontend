import BackendData from "@/types/backend-data";
import { Consulta } from "@/types/consulta";
import { useBoardStore } from "./Stores/boardStore";
import axios from "axios";
import { useChartStore } from "./Stores/chartStore";

export async function SendQuery(consulta: Consulta) {
  const { userData, id_boardSelected, updateChart } = useBoardStore.getState();

  const { chartSelected } = useChartStore.getState();

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
  } finally {
    console.log(backendData);
    console.log(active);

    updateChart(
      userData[id_boardSelected],
      chartSelected,
      active,
      backendData,
      consulta.typeChart
    );
  }
}
