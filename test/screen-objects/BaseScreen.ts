import { DEFAULT_TIMEOUT_MS } from '../constants';

/**
 * Abstract class that implements the base screen functionality for testing React Native
 * applications using Appium.
 *
 * This class contains functions that can be called by all concrete screen implementations.
 * Functionality specific to a screen should be included in the concrete screen class
 * instead of being added here. For example, a LoginScreen should contain logic for entering
 * an email address, password, and signing in to the app instead of having that functionality
 * be available here.
 *
 * Each concrete class needs to provide its implementation of the screen title.
 */
export abstract class BaseScreen {
  public abstract readonly title: string;
  constructor() {}

  // --------------------- Functions ----------------------

  /**
   * Schedules a command to clear an element's content.
   * @param element WebdriverIO.Element to clear
   *
   */
  async clearValue(element: ChainablePromiseElement): Promise<void> {
    if (!element.elementId) {
      throw new Error(
        element.error?.message ?? `clearValue: Unable to find element.`
      );
    }

    await element.clearValue();
  }

  /**
   * Schedules a command to pause the test execution.
   * @param timeout Number of milliseconds to pause.
   */
  async pause(timeout: number = DEFAULT_TIMEOUT_MS): Promise<void> {
    driver.pause(timeout);
  }

  /**
   * Schedules a command to press / click on an element.
   * @param element Element to press
   */
  async press(element: ChainablePromiseElement): Promise<void> {
    if (!element.elementId) {
      throw new Error(
        element.error?.message ?? `press: Unable to find element.`
      );
    }

    await element.click();
  }

  /**
   * Schedules a command to wait until an element is visible on the screen before timing out.
   * @param element Element that should display on the screen
   * @param timeout Number of milliseconds to wait for the element to display
   */
  async waitUntilElementIsVisible(
    element: ChainablePromiseElement,
    timeout: number = DEFAULT_TIMEOUT_MS
  ): Promise<void> {
    await element.waitForDisplayed({ timeout });
  }
}
