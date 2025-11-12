import { makeAutoObservable } from 'mobx';

export type MaterialType = {
  id: number;
  name: string;
  density: number;
  price_per_kg: number;
};

class MaterialsState {
  materials: MaterialType[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMaterials(data: MaterialType[]) {
    this.materials = data;
  }
  startLoading() {
    this.loading = true;
  }
  finishLoading() {
    this.loading = false;
  }
  get materialNames(): string[] {
    return this.materials.map((i) => i.name);
  }
}

export const materialsState = new MaterialsState();
