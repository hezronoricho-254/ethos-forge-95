import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.00ee14a0aba64153b7b90589f9f3b8ee',
  appName: 'ethos-forge-95',
  webDir: 'dist',
  server: {
    url: 'https://00ee14a0-aba6-4153-b7b9-0589f9f3b8ee.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f0f23',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
  },
};

export default config;