import { defineConfig } from 'checkly'

const config = defineConfig({
  logicalId: 'checkly-website',
  projectName: 'checkly-website',
  checks: {
    playwrightConfigPath: './playwright.config.ts',
    playwrightChecks: [
      {
        name: 'Demo Suite',
        logicalId: 'demo-suite-tests',
        pwTags:'filmSite',
        frequency: 10,
        locations: ['us-east-1',],
        groupName: 'Demo Suite', // use the name of the group you created
      },
    ],
  },
  cli: {
    runLocation: 'us-east-1',
  },
})

export default config