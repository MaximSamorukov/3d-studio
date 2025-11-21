export type Properties = {
  temperature: string;
  bed: string;
  strength: string;
  flexibility: string;
  shrinkage: string;
  notes: string;
};

export type PlasticType = {
  name: string;
  extendedName: string;
  application: string;
  descriptions: string;
  properties: Properties;
};
