/**
 * Генерирует содержимое файла истории для компонента
 */
export const generateStoryContent = (component, config) => {
  const { name } = component;
  const { subDir, componentsDir, folderName } = config;

  return `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${name} } from "../../../${componentsDir}/${folderName}";

const meta: Meta<typeof ${name}> = {
 title: "${subDir}/${name}",
 parameters: {
  layout: "centered",
 },
  component: ${name},

  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
    viewBox: { control: "text" },
    preserveAspectRatio: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof ${name}>;;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;
};

