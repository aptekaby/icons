// Создает в stories папку с историями для компонентов из папки build. В качестве аргумента принимает название подкаталога (web, native)

import { ensureDir } from "../utils/file-utils.js";
import { collectComponents } from "../utils/component-utils.js";
import { generateStories as generateComponentStories } from "./story-generator.js";
import { generateShowcase } from "./showcase-generator.js";

export const generateStories = (subDir) => {
  if (!subDir) {
    console.error("Usage: generateStories <subDir>");
    process.exit(1);
  }

  const config = {
    subDir,
    componentsDir: `./build/${subDir}`,
    storiesDir: `./stories/${subDir}`,
  };

  try {
    ensureDir(config.storiesDir);

    const components = collectComponents(config.componentsDir);

    generateComponentStories(components, config);

    if (components.length > 0) {
      generateShowcase(components, config);
    }

    console.log(`✓ Generated stories for ${components.length} components`);
  } catch (error) {
    console.error("Error generating stories:", error);
    process.exit(1);
  }
};
