export type Series =
  | number
  | {
      data: number[];
    }
  | {
      data: [number, number][];
    }
  | {
      data: { x: number | string; y: number }[];
    }
  | {
      name: string;
      data: { x: string; y: number }[];
    }
  | {
      name: string;
      data: number[] | number[][];
    };
