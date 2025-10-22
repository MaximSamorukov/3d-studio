//"use client";
import { makeAutoObservable } from "mobx";
import { LoginFormType } from "./types";
import { signIn } from "next-auth/react";

class FormLoginState {
  login = "";
  password = "";

  constructor() {
    //makeAutoObservable(this);
  }

  setValue<K extends keyof Pick<FormLoginState, "login" | "password">>(
    key: K,
    value: string
  ) {
    this[key] = value;
  }

  loginHandler(data: LoginFormType): Promise<boolean> {
    console.log("auth", signIn);
    const formData = new FormData();
    formData.append("login", data?.login);
    formData.append("password", data?.password);
    return signIn("Credentials", {
      login: data.login,
      password: data.password,
    })
      .then((result: any) => {
        console.log("result", result);
        return true;
      })
      .catch((e) => {
        console.log(e);
        return false;
      });
  }
}

export const formLoginState = new FormLoginState();
