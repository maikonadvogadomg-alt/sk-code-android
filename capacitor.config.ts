import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.skcodeeditor.app',
  appName: 'SK Code',
  webDir: 'dist',
  server: { androidScheme: 'https' },
  plugins: {
    SQLiteConnection: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
    },
    Preferences: {
      group: 'NativeStorage',
    },
  },
};
export default config;
