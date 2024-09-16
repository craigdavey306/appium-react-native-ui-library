import { BaseScreen } from './BaseScreen';
import { SelectorType, iosElementType } from '../utils/selector-utils';

/**
 * Creates a React Native stack navigation selector for the correct OS under test.
 * @param label Label for the navigation element
 * @param type Expected iOS element type to use when testing iOS.
 * @returns A chainable element
 */
function createStackNavigationSelector(label: string, type: SelectorType) {
  if (driver.isIOS) {
    const iosSelector = `**/${iosElementType(type)}[\`label == "${label}"\`]`;
    const selector = `-ios class chain:${iosSelector}`;
    return $(selector);
  }

  return $(`~${label}`);
}

/**
 * Creates a React Native stack navigation selector for the header title.
 * @param label Screen title
 * @returns A chainable element
 */
function createStackNavigationHeaderSelector(label: string) {
  if (driver.isIOS) {
    return createStackNavigationSelector(label, 'static-text');
  }

  return $(`//android.widget.TextView[@text="${label}"]`);
}

/**
 * Class that implements the state and functionality for the UI app's home screen.
 * This class extends the BaseScreen abstract class and has access to its methods.
 *
 * The methods provided by this class allow for granular testing as well as
 * more overarching testing by combining functionality into specific methods.
 *
 * @extends BaseScreen
 *
 * ### Examples:
 * ```javascript
 * const button = HomeScreen.buttonScreenNavItem;
 * await button.click();
 * ```
 */
class HomeScreen extends BaseScreen {
  /**
   * Screen title displaying at the top of the screen. Can be used to confirm that the test
   * has navigated to the correct screen.
   */
  public readonly title = 'Home';

  constructor() {
    super();
  }

  /**
   * Chainable element for the Button screen option.
   */
  get buttonScreenNavItem() {
    return createStackNavigationSelector('Navigate to Button', 'screen');
  }

  /**
   * Chainable element for the Text Input screen option.
   */
  get textInputScreenNavItem() {
    return createStackNavigationSelector('Navigate to Text Input', 'screen');
  }

  /**
   * Chainable element for the return to Home screen navigational option at the top of the screen.
   */
  get returnHomeButton() {
    return createStackNavigationSelector('Home', 'button');
  }

  getHeaderNameElement(label: string) {
    return createStackNavigationHeaderSelector(label);
  }
}

export default new HomeScreen();
