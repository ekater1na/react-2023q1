import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
    codeCoverageTasksRegistered: true,
  },
  e2e: {
    video: false,
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      codeCoverageTask(on, config);
      return config;
    },
    screenshotOnRunFailure: false,
  },
});
