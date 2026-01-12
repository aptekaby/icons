// Генерирует истории storybook для web и native

import { generateStories } from "./storybook-generator/generators/generate-stories.js";

const main = () => {
  generateStories("web");
  generateStories("native");
};

main();
