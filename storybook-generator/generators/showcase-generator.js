import path from "path";
import { ensureDir, writeFile } from "../utils/file-utils.js";
import { generateShowcaseContent } from "../templates/showcase.template.js";
import { generateDownloadButtonContent } from "../templates/download-button.template.js";
import { generateIconGridContent } from "../templates/icon-grid.template.js";

/**
 * Генерирует все файлы для showcase
 */
export const generateShowcase = (components, config) => {
  const { storiesDir } = config;
  const showcaseDir = path.join(storiesDir, "Showcase");

  ensureDir(showcaseDir);

  // Генерируем MDX файл
  const showcaseFile = path.join(showcaseDir, "index.mdx");
  const showcaseContent = generateShowcaseContent();
  writeFile(showcaseFile, showcaseContent);

  // Генерируем DownloadButton
  const downloadButtonFile = path.join(showcaseDir, "DownloadButton.tsx");
  const downloadButtonContent = generateDownloadButtonContent(components);
  writeFile(downloadButtonFile, downloadButtonContent);

  // Генерируем IconGrid
  const iconGridFile = path.join(showcaseDir, "IconGrid.tsx");
  const iconGridContent = generateIconGridContent(components, config);
  writeFile(iconGridFile, iconGridContent);
};
