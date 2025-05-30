import { prices } from "./constants";
import { saveFile } from "./saveFile";

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
  const rawFile = req.get("fileUpload");
  const isFileLike =
    rawFile && typeof (rawFile as Blob).arrayBuffer === "function";
  const file = isFileLike ? rawFile : null;

  if (file) {
    try {
      saveFile(file as Blob);
    } catch (_) {
      return new Response(null, { status: 500 });
    }
  }

  return Response.json(calculation);
};
