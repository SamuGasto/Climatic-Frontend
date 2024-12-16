import { exampleData } from "@/config/test-data";
import { Chart } from "@/types/chart";

const ReadFilesToJson = (file: File): Promise<Chart[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = reader.result as string;
        const charts: Chart[] = JSON.parse(data);
        resolve(charts); // Devuelve los gráficos leídos
      } catch (error) {
        reject(error); // Maneja errores en la lectura o el JSON
      }
    };

    reader.onerror = () => {
      reject(new Error("Error al leer el archivo"));
    };

    reader.readAsText(file);
  });
};

export default ReadFilesToJson;
