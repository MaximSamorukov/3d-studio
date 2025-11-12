import { makeAutoObservable } from 'mobx';

export type ServiceType = {
  id: string;
  title: string;
  alias: string;
  price: number;
};

class ServicesState {
  services: ServiceType[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setServices(data: ServiceType[]) {
    this.services = data;
  }
}

export const serviceState = new ServicesState();
