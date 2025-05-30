import { prices } from "./constants";

export const POST = async (request: Request) => {
  const req = await request.formData();

  const calculation = {
    weight: 254,
    plasticType: req.get("plasticType"),
    volume: 25,
    printTime: 135,
    price:
      prices[req.get("plasticType") as keyof typeof prices] || "нет данных",
  };
  console.log(req);
  return Response.json(calculation);
};
