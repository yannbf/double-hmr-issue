module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    // "../src/components/AnimatedIllustration/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Badge/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Button/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Category/*.stories.@(js|jsx|ts|tsx)",
    
    // "../src/components/ErrorBlock/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/Footer/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/FooterCard/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/forms/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Header/*.stories.@(js|jsx|ts|tsx)",

    // "../src/components/Icon/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/IconButton/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Logo/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Modal/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/PageSection/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/RestaurantCard/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Review/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/ShoppingCart/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/ShoppingCartMenu/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Sidebar/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/Spinner/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/TopBanner/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/typography/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    // "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  typescript: {
    reactDocgen: false
  },
  "webpackFinal": (config) => {
      const path = require('path');
      // add monorepo root as a valid directory to import modules from
      config.resolve.plugins.forEach((p) => {
        if (Array.isArray(p.appSrcs)) {
          p.appSrcs.push(path.join(__dirname, '..', '..', '..', 'storybook'));
        }
      });
      return config;
    }
    
}