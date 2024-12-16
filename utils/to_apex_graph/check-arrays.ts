export function isArrayOfArrays(arr: any): arr is number[][] {
  return (
    Array.isArray(arr) &&
    arr.every(
      (subArr) =>
        Array.isArray(subArr) &&
        subArr.every((item) => typeof item === "number")
    )
  );
}

export function isArrayOfArrayOfArrays(arr: any): arr is number[][][] {
  return (
    Array.isArray(arr) &&
    arr.every(
      (subArr) =>
        Array.isArray(subArr) &&
        subArr.every(
          (subArr2) =>
            Array.isArray(subArr2) &&
            subArr2.every((item) => typeof item === "number")
        )
    )
  );
}
