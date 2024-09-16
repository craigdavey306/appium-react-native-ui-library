# Appium Testing for React Native UI App

## Project Overview

This project provides an example of what could be done for testing a React Native application. Code for the app can be found [here](https://github.com/craigdavey306/react-native-ui-library).

## Getting Started

The project will need to be downloaded or cloned before completing the remaining steps. The application tested here does not require environment variables since there is no authentication necessary when running the app.

### Installing Dependencies

First, you will need to install the package dependencies. To install the dependencies, run the following command from the `root` of the project:

```bash
# using npm
npm install
```

### Update the Configuration Capabilities

The `config` directory contains three configuration files:

- wdio.android.conf.ts - Contains all Android-specific configurations
- wdio.ios.conf.ts - Contains all iOS-specific configuration
- wdio.shared.conf.ts - Contains configuration shared between Android and iOS devices

Update the Android and iOS configurations with the specific emulators and simulators you intend to use for testing. Extract the app-debug.apk file from the zipped file.

### Start Tests

This project provides test scripts for testing Android and iOS. To run either of the tests, run the following from the command line.

For Android:

```bash
# using npm
npm run test:android
```

For iOS:

```bash
# using npm
npm run test:ios
```

### Add or Modify Tests

Now that you have successfully run tests, you can add additional test files, which must exist in the `\test\specs` directory.

## Congratulations!

You've successfully run and modified the automated Appium tests.

# Additional Information

## Folder Structure

The folder structure is:

- **app** - Contains the Android and iOS applications to use in testing.
- **data** - Contains any data files needed for the tests
- **debug** - Files created here can be used for debugging purposes and are not committed with Git commands
- **logs** - Test output should be written here for review
- **snapshots** - Any snapshots taken during a test, should be written here
- **test** - Contains constants, screen objects (aka Page Object Models), utilities / helpers, and tests. Tests must exist in the `specs` folder.

# Learn More

To learn more about the automation scripts, take a look at the following resources:

- [Appium](https://appium.io/docs/en/latest/) - learn about Appium
- [WebDriverIO](https://webdriver.io/docs/gettingstarted/) - learn about WebDriverIO
- [Appium Inspector](https://github.com/appium/appium-inspector) - learn how to use the Appium Inspector for finding element selectors in the application
- [Appium XCUITest Driver](https://github.com/appium/appium-xcuitest-driver) - documentation for the Appium XCUITest Driver used for testing iOS devices
- [Appium UiAutomator2 Driver](https://github.com/appium/appium-uiautomator2-server) - documentation for the Appium UiAutomator2 Driver used for testing Android devices
