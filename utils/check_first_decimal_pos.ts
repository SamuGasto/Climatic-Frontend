export const check_first_decimal_pos = (number: number) => {
  let value = number.toFixed(12).toString().split(".")[1];

  if (!value) return 0;

  for (let i = 0; i < value.length; i++) {
    if (i > 2) {
      if (value[i] !== "0") {
        return i + 1;
      }
    }
  }
};
