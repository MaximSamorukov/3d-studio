//"use client";
import { makeAutoObservable } from 'mobx';

type UserStateType = {
  id: string | null;
  name: string | null;
  email: string | null;
  image: string | null;
};
class UserState {
  id: UserStateType['id'] = null;
  name: UserStateType['name'] = null;
  email: UserStateType['email'] = null;
  image: UserStateType['image'] = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: UserStateType) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.image = data.image;
  }

  removeUserFromState() {
    this.id = null;
    this.name = null;
    this.email = null;
    this.image = null;
  }

  get isAuthorized() {
    return !!this.id;
  }
}

export const userState = new UserState();
