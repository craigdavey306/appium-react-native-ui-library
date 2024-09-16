import { BaseScreen } from './BaseScreen';
import { convertLocatorToAccessibilityId } from '../utils/selector-utils';

/**
 * Class that implements the state and functionality for the UI app's button test screen.
 * This class extends the BaseScreen abstract class and has access to its methods.
 *
 * The methods provided by this class allow for granular testing as well as
 * more overarching testing by combining functionality into specific methods.
 *
 * @extends BaseScreen
 *
 * ### Examples:
 * ```javascript
 * const button = ButtonScreen.actionContainedIconEnabled;
 * await button.click();
 * ```
 *
 */
class ButtonScreen extends BaseScreen {
  /**
   * Defines the locator string for the clickable, contained action button with an icon.
   */
  private static actionContainedIconEnabledLocator =
    'ActionButtonWithIconContainedEnabled';
  /**
   * Defines the locator string for the clickable, contained action button without an icon.
   */
  private static actionContainedNoIconEnabledLocator =
    'ActionButtonWithoutIconContainedEnabled';
  /**
   * Defines the locator string for the disabled, contained action button with an icon.
   */
  private static actionContainedIconDisabledLocator =
    'ActionButtonWithIconContainedDisabled';

  /**
   * Screen title displaying at the top of the screen. Can be used to confirm that the test
   * has navigated to the correct screen.
   */
  public readonly title = 'Button';

  constructor() {
    super();
  }

  /**
   * Chainable element for the clickable, contained action button with an icon.
   */
  get actionContainedIconEnabled() {
    return convertLocatorToAccessibilityId(
      ButtonScreen.actionContainedIconEnabledLocator
    );
  }

  /**
   * Chainable element for the clickable, contained action button without an icon.
   */
  get actionContainedNoIconEnabled() {
    return convertLocatorToAccessibilityId(
      ButtonScreen.actionContainedNoIconEnabledLocator
    );
  }

  /**
   * Chainable element for the disabled, contained action button.
   */
  get actionContainedDisabled() {
    return convertLocatorToAccessibilityId(
      ButtonScreen.actionContainedIconDisabledLocator
    );
  }

  /**
   * Chainable element for the Alert modal's OK button.
   */
  get alertOkayButton() {
    const buttonText = 'OK';

    // iOS locator strategy
    if (driver.isIOS) {
      return $(`~${buttonText}`);
    }

    // Android locator strategy.
    return $(`//android.widget.Button[@text="${buttonText}"]`);
  }
}

export default new ButtonScreen();
