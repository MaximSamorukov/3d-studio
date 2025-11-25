import { action, makeObservable, observable } from 'mobx';

export class CRMDrawerFilterState {
  open = false;

  constructor() {
    makeObservable(this, {
      open: observable,
      handleOpen: action,
      handleClose: action,
    });
  }
  handleOpen() {
    this.open = true;
  }
  handleClose() {
    this.open = false;
  }
  toggle() {
    this.open = !this.open;
  }
}

export const crmDraweFilterState = new CRMDrawerFilterState();
