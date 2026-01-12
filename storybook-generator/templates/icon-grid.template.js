import {
  generateComponentImports,
  generateComponentsArray,
} from "../utils/component-utils.js";

/**
 * Генерирует содержимое компонента IconGrid
 */
export const generateIconGridContent = (components, config) => {
  const { subDir } = config;
  const imports = generateComponentImports(components);
  const componentsArray = generateComponentsArray(components);

  return `import React from "react";
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
};

