import { makeAutoObservable } from "mobx";
import { ContactFormType } from "./types";
import { orderConsultation } from "@/services";

class FormOrderConsultationState {
  contact = "";

  constructor() {
    makeAutoObservable(this);
  }

  setValue<K extends keyof Pick<ContactFormType, "contact">>(
    key: K,
    value: string
  ) {
    this[key] = value;
  }

  orderConsultationHandler(data: ContactFormType) {
    const formData = new FormData();
    formData.append("contact", data.contact);
    orderConsultation(formData).then((result) => {
      console.log(result);
    });
  }
}

export const formOrderConsultationState = new FormOrderConsultationState();
