import { defineBddConfig } from 'playwright-bdd';

export default defineBddConfig({
  features: 'e2e/tests/features/**/*.feature',
  steps: [
    'e2e/tests/steps/**/*.ts',
    'e2e/fixtures/pages.fixture.ts',
  ],
  importTestFrom: 'e2e/fixtures/pages.fixture.ts',
});