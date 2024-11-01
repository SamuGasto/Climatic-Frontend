export default interface BackendData {
  latitude: number[];
  longitude: number[];
  image: string;
  time?: string | string[];
  level?: number | number[];
  data: number[][];
  units: string;
}
