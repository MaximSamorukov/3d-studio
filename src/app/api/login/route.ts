import { prices } from "./constants";
import { saveFile } from "./saveFile";

export const POST = async (request: Request) => {
  //const req = await request.formData();

  return Response.json({ login: "login", password: "password" });
};
