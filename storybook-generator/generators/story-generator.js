import path from "path";
import { ensureDir, writeFile } from "../utils/file-utils.js";
import { generateStoryContent } from "../templates/story.template.js";

/**
 * Генерирует истории для всех компонентов
 */
export const generateStories = (components, config) => {
  const { storiesDir, componentsDir } = config;

  components.forEach((component) => {
    const { name, folderName } = component;
    const storyDir = path.join(storiesDir, name);

    ensureDir(storyDir);

    const storyFile = path.join(storyDir, "index.stories.ts");
    const storyContent = generateStoryContent(component, {
      ...config,
      folderName,
    });

    writeFile(storyFile, storyContent);
  });
};

