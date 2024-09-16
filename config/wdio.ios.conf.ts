import path from 'node:path';
import type { Options } from '@wdio/types';
import { config as sharedConfig } from './wdio.shared.conf.js';

const APP_NAME = 'UIApp';
const IOS_APP_PATH = path.join(process.cwd(), `app/ios/${APP_NAME}.ipa`);

// iOS testing overrides
const iosConfig: Options.Testrunner = {
  // capabilities for local Appium tests on iOS Simulator
  capabilities: [
    {
      'appium:platformName': 'ios',
      'appium:deviceName': 'iPhone 15',
      // 'appium:platformVersion': '17.2',
      'appium:automationName': 'XCUITest',
      'appium:app': IOS_APP_PATH,
    },
  ],
};

export const config = Object.assign(sharedConfig, iosConfig);
