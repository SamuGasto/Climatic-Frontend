export default interface BackendData {
  var: string;
  latitude: number[];
  longitude: number[];
  image: string;
  time?: string | string[];
  level?: number;
  data: number[][] | number[][][];
  units: string[];
}
