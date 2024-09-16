import { expect } from '@wdio/globals';
import HomeScreen from '../screen-objects/HomeScreen';
import InputTextScreen from '../screen-objects/InputTextScreen';

describe('Input Text tests', () => {
  it('should navigate to the input text screen at the start of the test', async () => {
    await HomeScreen.waitUntilElementIsVisible(
      HomeScreen.textInputScreenNavItem,
      5000
    );
    await HomeScreen.textInputScreenNavItem.click();

    const inputTextScreen = HomeScreen.getHeaderNameElement(
      InputTextScreen.title
    );

    await expect(inputTextScreen).toExist();
    await expect(inputTextScreen).toHaveText(InputTextScreen.title);
  });

  it('should have disabled input that is not enabled', async () => {
    const inputElement = InputTextScreen.disabledInputText;
    const renderedTextElement = InputTextScreen.renderedText;
    const expectedText = 'Disabled Text';

    await Promise.all([
      expect(inputElement).toExist(),
      expect(inputElement).toBeDisabled(),
    ]);

    // Try to remove the contents of the input text.
    await inputElement.clearValue();

    // Confirm nothing was updated for the disabled input text.
    await expect(inputElement).toHaveText(expectedText);
    await expect(renderedTextElement).toHaveText(expectedText);
  });

  it('should handle numbers for numeric input', async () => {
    const inputElement = InputTextScreen.numericInputText;
    const renderedTextElement = InputTextScreen.renderedText;
    const inputText = '1234567890';
    const maxLength = 5;
    const expectedOutput = inputText.slice(0, maxLength);
    // Characters to send to the input element.
    const chars = inputText.split('');

    await Promise.all([
      expect(inputElement).toExist(),
      expect(inputElement).toBeEnabled(),
    ]);

    await inputElement.click();
    await inputElement.clearValue();
    await inputElement.sendKeys(chars);

    await expect(inputElement).toHaveText(expectedOutput);
    await expect(renderedTextElement).toHaveText(expectedOutput);
  });
});
