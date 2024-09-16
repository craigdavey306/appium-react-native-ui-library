import path from 'node:path';
import type { Options } from '@wdio/types';
import { config as sharedConfig } from './wdio.shared.conf.js';

const ANDROID_APP_PATH = path.join(process.cwd(), 'app/android/app-debug.apk');
console.log('android path', ANDROID_APP_PATH);

// Android testing overrides.
const androidConfig: Options.Testrunner = {
  // capabilities for local Appium tests on Android Emulator(s)
  capabilities: [
    {
      'appium:platformName': 'Android',
      'appium:deviceName': 'Nexus 5X',
      'appium:platformVersion': '13.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': ANDROID_APP_PATH,
    },
  ],
};

export const config = Object.assign(sharedConfig, androidConfig);
