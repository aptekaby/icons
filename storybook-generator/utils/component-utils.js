import path from "path";
import { fileExists, readDirs } from "./file-utils.js";
import {
  capitalizeFirstLetter,
  getComponentImportPath,
  getSvgImportPath,
} from "./name-utils.js";

/**
 * Собирает список всех компонентов из директории
 * @returns {Array<{name: string, importPath: string, folderName: string}>}
 */
export const collectComponents = (componentsDir) => {
  const components = [];

  readDirs(componentsDir).forEach((componentDir) => {
    const componentPath = path.join(componentsDir, componentDir);
    const indexFile = path.join(componentPath, "index.ts");

    if (fileExists(indexFile)) {
      const componentName = capitalizeFirstLetter(componentDir);
      const importPath = getComponentImportPath(componentsDir, componentDir);

      components.push({
        name: componentName,
        importPath,
        folderName: componentDir,
      });
    }
  });

  return components;
};

/**
 * Генерирует массив строк для импортов компонентов
 */
export const generateComponentImports = (components) => {
  return components
    .map((comp) => `import { ${comp.name} } from "${comp.importPath}";`)
    .join("\n");
};

/**
 * Генерирует массив строк для импортов SVG
 */
export const generateSvgImports = (components) => {
  return components
    .map((comp) => {
      const svgVarName = `${comp.folderName}Svg`;
      const svgPath = getSvgImportPath(comp.folderName);
      return `import ${svgVarName} from "${svgPath}";`;
    })
    .join("\n");
};

/**
 * Генерирует массив компонентов для использования в React
 */
export const generateComponentsArray = (components) => {
  return components
    .map((comp) => `  { name: "${comp.name}", Component: ${comp.name} },`)
    .join("\n");
};

/**
 * Генерирует маппинг SVG файлов
 */
export const generateSvgFilesMapping = (components) => {
  return components
    .map((comp) => {
      const svgVarName = `${comp.folderName}Svg`;
      return `  ${comp.name}: ${svgVarName},`;
    })
    .join("\n");
};

