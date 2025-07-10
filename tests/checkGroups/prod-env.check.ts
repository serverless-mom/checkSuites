import { AlertChannel, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

export const prodShopGroup = new CheckGroupV2('prod-w1gSVvU5', {
  name: 'Production Environment',
  locations: [
    'us-west-2',
    'us-west-1',
  ],
  alertEscalationPolicy: 'global',
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 6,
    maxRetries: 3,
    maxDurationSeconds: 1200,
    sameRegion: true,
  }),
  runParallel: true,
})
