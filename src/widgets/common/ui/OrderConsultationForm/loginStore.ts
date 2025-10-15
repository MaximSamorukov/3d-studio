import { makeAutoObservable } from "mobx";
import { LoginFormType } from "./types";
import { login as loginFn } from "@/services";

class FormLoginState {
  login = "";
  password = "";

  constructor() {
    makeAutoObservable(this);
  }

  setValue<K extends keyof Pick<FormLoginState, "login" | "password">>(
    key: K,
    value: string
  ) {
    this[key] = value;
  }

  loginHandler(data: LoginFormType) {
    const formData = new FormData();
    formData.append("login", data.login);
    formData.append("password", data.password);
    loginFn(formData).then((result) => {
      console.log(result);
    });
  }
}

export const formLoginState = new FormLoginState();
