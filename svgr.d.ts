// Необходимо для того, чтобы typescript мог импортировать svg

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

// Для импорта SVG как raw строки (используется в Storybook)
declare module "*.svg?raw" {
  const content: string;
  export default content;
}
