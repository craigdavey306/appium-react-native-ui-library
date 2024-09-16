import { expect } from '@wdio/globals';
import HomeScreen from '../screen-objects/HomeScreen';
import ButtonScreen from '../screen-objects/ButtonScreen';

describe('Button E2E tests', () => {
  it('should navigate to the button screen at the start of the test', async () => {
    await HomeScreen.waitUntilElementIsVisible(
      HomeScreen.buttonScreenNavItem,
      5000
    );
    await HomeScreen.buttonScreenNavItem.click();

    const buttonScreen = HomeScreen.getHeaderNameElement(ButtonScreen.title);

    await expect(buttonScreen).toExist();
    await expect(buttonScreen).toHaveText(ButtonScreen.title);
  });

  it('should display the action button with icon', async () => {
    const button = ButtonScreen.actionContainedIconEnabled;
    await Promise.all([expect(button).toExist(), expect(button).toBeEnabled()]);

    await button.click();

    const alert = ButtonScreen.alertOkayButton;
    await expect(alert).toExist();

    await alert.click();
  });

  it('should not be clickable when a button is disabled', async () => {
    const button = ButtonScreen.actionContainedDisabled;

    await expect(button).toExist();

    await button.click();
    const alert = ButtonScreen.alertOkayButton;
    await expect(alert).not.toExist();
  });
});
