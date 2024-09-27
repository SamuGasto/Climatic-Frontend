export default interface BackendData {
  latitude: number[];
  longitude: number[];
  time?: string;
  level?: number[];
  data: number[][];
  units: string;
}
