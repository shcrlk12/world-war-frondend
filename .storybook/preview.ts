import type { Preview } from "@storybook/vue3";

import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    decorators: [
      (story) => ({
        components: { story },
        template: '<div style="margin: 3em;"><story /></div>',
      }),
    ],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
