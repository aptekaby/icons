// Создает в stories папку с историями для компонентов из папки build. В качестве аргумента принимает название подкаталога (web, native)
// Пример вызова: node generate-web-stories.js SUB_DIR

import fs from "fs";
import path from "path";

const subDir = process.argv[2]; // подкаталог
const componentsDir = `./build/${subDir}`; // целевой каталог с компонентами
const storiesDir = `./stories/${subDir}`; // целевой каталог для историй

// создаем каталог для историй, если его нет
if (!fs.existsSync(storiesDir)) {
  fs.mkdirSync(storiesDir, { recursive: true });
}

// собираем список всех компонентов для showcase
const components = [];

// читаем каталог с компонентами
fs.readdirSync(componentsDir).forEach((componentDir) => {
  const componentPath = path.join(componentsDir, componentDir);
  const indexFile = path.join(componentPath, "index.ts");

  // проверяем, что index.ts существует
  if (fs.existsSync(indexFile)) {
    const componentName = capitalizeFirstLetter(componentDir);
    const storyDir = path.join(storiesDir, componentName);
    const storyFile = path.join(storyDir, "index.stories.ts");

    // создаем каталог для истории, если его нет
    if (!fs.existsSync(storyDir)) {
      fs.mkdirSync(storyDir);
    }

    const storyContent = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${componentName} } from "../../../${componentsDir}/${componentDir}";

const meta: Meta<typeof ${componentName}> = {
 title: "${subDir}/${componentName}",
 parameters: {
  layout: "centered",
 },
  component: ${componentName},

  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
    viewBox: { control: "text" },
    preserveAspectRatio: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof ${componentName}>;;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;

    // записываем историю в файл
    fs.writeFileSync(storyFile, storyContent);

    // добавляем компонент в список для showcase
    components.push({
      name: componentName,
      importPath: `../../../${componentsDir}/${componentDir}`,
      folderName: componentDir, // сохраняем оригинальное имя папки для SVG импортов
    });
  }
});

// создаем showcase историю
if (components.length > 0) {
  const showcaseDir = path.join(storiesDir, "Showcase");
  if (!fs.existsSync(showcaseDir)) {
    fs.mkdirSync(showcaseDir, { recursive: true });
  }

  const showcaseFile = path.join(showcaseDir, "index.mdx");
  const iconGridFile = path.join(showcaseDir, "IconGrid.tsx");
  const downloadButtonFile = path.join(showcaseDir, "DownloadButton.tsx");

  // генерируем импорты компонентов
  const imports = components
    .map((comp) => `import { ${comp.name} } from "${comp.importPath}";`)
    .join("\n");

  // генерируем импорты SVG как raw
  const svgImports = components
    .map((comp) => {
      const svgVarName = `${comp.folderName}Svg`;
      return `import ${svgVarName} from "../../../src/icons/${comp.folderName}/${comp.folderName}.svg?raw";`;
    })
    .join("\n");

  // генерируем массив компонентов
  const componentsArray = components
    .map((comp) => `  { name: "${comp.name}", Component: ${comp.name} },`)
    .join("\n");

  // генерируем маппинг SVG файлов
  const svgFilesMapping = components
    .map((comp) => {
      const svgVarName = `${comp.folderName}Svg`;
      return `  ${comp.name}: ${svgVarName},`;
    })
    .join("\n");

  const showcaseContent = `import IconGrid from "./IconGrid";

<IconGrid />`;

  // Генерируем компонент кнопки загрузки
  const downloadButtonContent = `import React, { useState } from "react";
import JSZip from "jszip";
${svgImports}

// Маппинг имен компонентов на SVG содержимое
const svgFiles: Record<string, string> = {
${svgFilesMapping}
};

// Массив имен всех иконок
const iconNames = [
${components.map((comp) => `  "${comp.name}",`).join("\n")}
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

  // Генерируем компонент IconGrid
  const iconGridContent = `import React from "react";
import { DownloadButton } from "./DownloadButton";
${imports}

const iconComponents = [
${componentsArray}
];

const IconGrid: React.FC = () => {
  const getStoryUrl = (iconName: string) => {
    // Storybook формирует ID из title в формате: subDir/IconName -> subdir-iconname--default
    const storyId = \`${subDir.toLowerCase()}-\${iconName.toLowerCase()}--default\`;
    return \`../?path=/story/\${storyId}\`;
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "16px",
    maxWidth: "100%",
  };

  const iconCardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: "#fff",
    textDecoration: "none",
    color: "inherit",
  };

  const iconWrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "64px",
    height: "64px",
    marginBottom: "12px",
  };

  const iconNameStyle: React.CSSProperties = {
    fontSize: "12px",
    textAlign: "center",
    color: "#333",
    wordBreak: "break-word",
  };

  const containerStyle: React.CSSProperties = {
    padding: "24px",
  };

  return (
    <div style={containerStyle}>
      <DownloadButton />
      <div style={gridStyle}>
        {iconComponents.map(({ name, Component }) => (
          <a
            key={name}
            href={getStoryUrl(name)}
            style={iconCardStyle}
          >
            <div style={iconWrapperStyle}>
              <Component width={48} height={48} />
            </div>
            <div style={iconNameStyle}>{name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;`;

  fs.writeFileSync(showcaseFile, showcaseContent);
  fs.writeFileSync(iconGridFile, iconGridContent);
  fs.writeFileSync(downloadButtonFile, downloadButtonContent);
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
