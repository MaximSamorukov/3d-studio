import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";

export const saveFile = async (file: Blob) => {
  if (!file || typeof file.stream !== "function") {
    throw new Error("Некорректный файл");
  }
  const filename = (file as File).name;
  const dirPath = path.join(process.cwd(), "public", "uploads", "models");
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(dirPath, filename);

    await writeFile(filePath, buffer);
  } catch (_) {
    throw new Error("Ошибка записи файла");
  }
};
