/**
 * Преобразует первую букву в верхний регистр
 * arrowIcon -> ArrowIcon
 */
export const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

/**
 * Преобразует имя компонента в имя для story ID
 * ArrowIcon -> arrowicon
 */
export const toStoryId = (componentName) => {
  return componentName.toLowerCase();
};

/**
 * Генерирует путь импорта компонента
 */
export const getComponentImportPath = (componentsDir, folderName) => {
  return `../../../${componentsDir}/${folderName}`;
};

/**
 * Генерирует путь импорта SVG
 */
export const getSvgImportPath = (folderName) => {
  return `../../../src/icons/${folderName}/${folderName}.svg?raw`;
};

