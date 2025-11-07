export const getObject = (object: Record<string, string>) => {
  const key = Object.keys(object)[0];
  const value = object[key];
  return {
    value,
    key,
  };
};
