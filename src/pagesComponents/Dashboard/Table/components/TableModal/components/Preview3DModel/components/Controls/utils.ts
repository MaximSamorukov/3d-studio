export const mmToSm = (value: string) => {
  const volumeNum = Number(value);
  return (volumeNum / 1000).toFixed(2);
};
