import { makeAutoObservable } from "mobx";
import { CalculationForm } from "./types";
import { calculatePrintPrice } from "@/services";

class FormCalculationState {
  weight = "нет данных";
  plasticType = "нет данных";
  volume = "нет данных";
  printTime = "нет данных";
  price = "нет данных";

  constructor() {
    makeAutoObservable(this);
  }

  setValue<
    K extends keyof Pick<
      FormCalculationState,
      "weight" | "plasticType" | "volume" | "printTime" | "price"
    >
  >(key: K, value: string) {
    this[key] = value;
  }

  requestCalculation(info: CalculationForm) {
    const formData = new FormData();
    formData.append("inputContacts", info.inputContacts);
    formData.append("withModeling", info.withModeling.toString());
    formData.append("withPostProcessing", info.withPostProcessing.toString());
    formData.append("plasticType", info.plasticType);
    formData.append("fileUpload", info.fileUpload);
    calculatePrintPrice(formData).then((result) => {
      const {
        weight = "нет данных",
        plasticType = "нет данных",
        volume = "нет данных",
        printTime = "нет данных",
        price = "нет данных",
      } = result;
      this.setValue("weight", weight);
      this.setValue("plasticType", plasticType);
      this.setValue("volume", volume);
      this.setValue("printTime", printTime);
      this.setValue("price", price);
    });
  }

  getCalculationData() {
    return {
      weight: this.weight,
      plasticType: this.plasticType,
      volume: this.volume,
      printTime: this.printTime,
      price: this.price,
    };
  }
}

export const formCalculationState = new FormCalculationState();
