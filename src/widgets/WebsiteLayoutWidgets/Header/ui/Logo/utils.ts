export const getDimension = (w: number) => {
  if (w > 1000) {
    return 100;
  } else {
    return Math.max(80, Math.floor(w / 10));
  }
};
