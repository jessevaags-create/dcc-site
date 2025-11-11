export interface AnalyticsConfig {
  gaMeasurementId?: string;
  metaPixelId?: string;
  hotjarId?: string;
}

export const hasAnalytics = (config: AnalyticsConfig): boolean => {
  return Boolean(config.gaMeasurementId || config.metaPixelId || config.hotjarId);
};
