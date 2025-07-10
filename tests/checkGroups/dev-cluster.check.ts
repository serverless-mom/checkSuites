import { AlertChannel, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

export const prodShopGroup = new CheckGroupV2('dev-w1gSVvU5', {
  name: 'Dev Cluster',
  locations: [
    'us-west-2',
    'us-west-1',
  ],
  alertEscalationPolicy: 'global',
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 6,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
  runParallel: true,
})
