import { exampleData } from "@/config/test-data";
import { Chart } from "@/types/chart";

const read_files_to_json = (file: File): Chart => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const data = e.target?.result as string;
      const json: Chart = JSON.parse(data);
      return json;
    };
    return {
      title: "error", 
      backendData: exampleData, 
      typeChart: "contorno",
      subtitle: "error", 
      active: false, 
      stats: 
      {
        max:0, 
        min:0, 
        mean:0, 
        median:0, 
        stdDeviation:0, 
        range:0, 
        mode:[]
      },
      id:-1};
}
export default read_files_to_json;