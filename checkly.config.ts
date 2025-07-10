import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'

export default defineConfig({
  projectName: 'Cool Website Checks',
  logicalId: 'cool-website-monitoring',
  repoUrl: 'https://github.com/serverless-mom/checkSuites',
  checks: {
    playwrightConfigPath: './playwright.config.ts',
    playwrightChecks: [
      {
        logicalId: 'smoke-2129873',
        name: 'Smoke tests',
        // Use one project (or multiple projects) defined in your Playwright config
        pwProjects: ['smoke'],
        frequency: Frequency.EVERY_10M,
        locations: ['us-east-1', 'eu-west-1'],
        groupName: 'Dev Cluster'
      },
      // {
      //   logicalId: 'critical-123089',
      //   name: 'Critical tests',
      //   // Use one project (or multiple projects) defined in your Playwright config
      //   pwProjects: ['critical'],
      //   frequency: Frequency.EVERY_5M,
      //   locations: ['us-east-1', 'eu-central-1', 'ap-southeast-2'],
      // },
      // {
      //   logicalId: 'bp-897123089',
      //   name: 'Best Practices',
      //   // Use one project (or multiple projects) defined in your Playwright config
      //   pwProjects: ['bestPractices'],
      //   frequency: Frequency.EVERY_5M,
      //   locations: ['us-east-1', 'eu-central-1', 'ap-southeast-2'],
      // },
    ],
  },
  cli: {
    runLocation: 'us-east-1',
    retries: 0,
  },
})