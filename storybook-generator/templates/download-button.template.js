import {
  generateSvgImports,
  generateSvgFilesMapping,
} from "../utils/component-utils.js";

/**
 * Генерирует содержимое компонента DownloadButton
 */
export const generateDownloadButtonContent = (components) => {
  const svgImports = generateSvgImports(components);
  const svgFilesMapping = generateSvgFilesMapping(components);

  const iconNames = components.map((comp) => `  "${comp.name}",`).join("\n");

  return `import React, { useState } from "react";
import JSZip from "jszip";
${svgImports}

// Маппинг имен компонентов на SVG содержимое
const svgFiles: Record<string, string> = {
${svgFilesMapping}
};

// Массив имен всех иконок
const iconNames = [
${iconNames}
];

export const DownloadButton: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadAllIcons = async () => {
    try {
      setIsDownloading(true);
      const zip = new JSZip();

      // Добавляем каждый SVG файл в архив
      iconNames.forEach((name) => {
        const svgContent = svgFiles[name];
        if (svgContent) {
          zip.file(\`\${name}.svg\`, svgContent);
        }
      });

      // Генерируем blob
      const blob = await zip.generateAsync({ type: "blob" });

      // Создаем ссылку для скачивания
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "icons.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to create ZIP:", error);
      alert("Failed to download icons. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadButtonStyle: React.CSSProperties = {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: isDownloading ? "not-allowed" : "pointer",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "24px",
    transition: "background-color 0.2s ease",
    opacity: isDownloading ? 0.6 : 1,
  };

  return (
    <button
      onClick={downloadAllIcons}
      disabled={isDownloading}
      style={downloadButtonStyle}
    >
      {isDownloading ? "Загрузка..." : "Скачать все иконки в ZIP"}
    </button>
  );
};`;
};

