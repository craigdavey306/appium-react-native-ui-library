import { BaseScreen } from './BaseScreen.js';

/**
 * Generates a selector for the input text fields.
 *
 * iOS uses the testID while Android uses the accessibilityLabel property.
 * The logic here converts a testID to an accessibility label to match
 * the values in the application.
 * @param locator
 * @returns
 */
function inputTextSelector(testID: string) {
  const selector = driver.isIOS ? testID : testID.split('-').join(' ');
  return $(`~${selector}`);
}

/**
 * Class that implements the state and functionality for the UI app's input text test screen.
 * This class extends the BaseScreen abstract class and has access to its methods.
 *
 * The methods provided by this class allow for granular testing as well as more
 * overarching testing by combining functionality into specific methods.
 *
 * @extends BaseScreen
 *
 * ### Examples:
 * ```javascript
 * const inputText = InputTextScreen.numericInputText;
 * await inputText.click();
 * await inputText.clearValue();
 * await inputText.sendKeys(['h','i']);
 * await expect(inputText).toHaveText('hi');
 * ```
 */
class InputTextScreen extends BaseScreen {
  /**
   * Screen title displaying at the top of the screen. Can be used to confirm that the test
   * has navigated to the correct screen.
   */
  public readonly title = 'Text Input';

  /**
   * testID string for the disabled input text.
   */
  private static disabledInputTextLocator = 'disabled-input-text';
  /**
   * testID string for the numeric input text.
   */
  private static numericInputTextLocator = 'numeric-input-text';
  /**
   * testID string for the rendered text output.
   */
  private static renderedTextOutputLocator = 'test-rendered-text';

  constructor() {
    super();
  }

  /**
   * Chainable element for the disabled input text.
   */
  get disabledInputText() {
    return inputTextSelector(InputTextScreen.disabledInputTextLocator);
  }

  /**
   * Chainable element for the numeric input text.
   */
  get numericInputText() {
    return inputTextSelector(InputTextScreen.numericInputTextLocator);
  }

  /**
   * Chainable element for the rendered text output.
   */
  get renderedText() {
    return inputTextSelector(InputTextScreen.renderedTextOutputLocator);
  }
}

export default new InputTextScreen();
