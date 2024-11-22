import { ChartStats } from "@/types/stats";

export function CalcularEstadisticas(numbers: number[]): ChartStats {
  if (numbers.length === 0) {
    throw new Error("El arreglo no puede estar vacío.");
  }

  const n = numbers.length;

  // Máximo y mínimo
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  // Promedio
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / n;

  // Desviación estándar
  const variance =
    numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / n;
  const stdDeviation = Math.sqrt(variance);

  // Mediana
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const median =
    n % 2 === 0
      ? (sortedNumbers[n / 2 - 1] + sortedNumbers[n / 2]) / 2
      : sortedNumbers[Math.floor(n / 2)];

  // Moda
  const frequencyMap: Record<number, number> = {};
  numbers.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  const maxFrequency = Math.max(...Object.values(frequencyMap));
  const mode = Object.keys(frequencyMap)
    .filter((key) => frequencyMap[+key] === maxFrequency)
    .map(Number);

  // Rango
  const range = max - min;

  return {
    max,
    min,
    mean,
    stdDeviation,
    median,
    mode,
    range,
  };
}
