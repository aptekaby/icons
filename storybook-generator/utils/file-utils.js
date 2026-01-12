import fs from "fs";
import path from "path";

/**
 * Создает директорию, если её нет
 */
export const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

/**
 * Записывает содержимое в файл
 */
export const writeFile = (filePath, content) => {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
};

/**
 * Проверяет существование файла
 */
export const fileExists = (filePath) => {
  return fs.existsSync(filePath);
};

/**
 * Читает список директорий
 */
export const readDirs = (dirPath) => {
  return fs.readdirSync(dirPath).filter((item) => {
    const fullPath = path.join(dirPath, item);
    return fs.statSync(fullPath).isDirectory();
  });
};

