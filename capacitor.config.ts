import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cupcup.coffee',
  appName: 'Cupcup',
  webDir: 'dist/frontend-coffee/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
