export const getObject = (object: Record<string, string>) => {
  const key = Object.keys(object)[0];
  const value = object[key];
  return {
    value,
    key,
  };
};

export const getWhereString = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  if (key === 'created_at') {
    return `DATE(created_at)=DATE('${value.split('.').reverse().join('-')}')`;
  } else {
    return `${key}='${value}'`;
  }
};
