import { $ } from '@wdio/globals';
export type SelectorType = 'button' | 'screen' | 'static-text' | 'text-field';

/**
 * Factory method for returning an iOS element selector.
 * @param type
 * @returns
 */
export function iosElementType(type: SelectorType): string {
  if (!driver.isIOS) {
    throw new Error(
      'iosElementType: Expected this function to be called for an iOS device.'
    );
  }

  switch (type) {
    case 'screen':
      return 'XCUIElementTypeOther';
    case 'button':
      return 'XCUIElementTypeButton';
    case 'text-field':
      return 'XCUIElementTypeTextField';
    default:
      return 'XCUIElementTypeStaticText';
  }
}

export function convertLocatorToAccessibilityId(locator: string) {
  if (driver.isIOS) {
    return $(`~${locator}`);
  }

  const selector = locator.match(/[A-Z][a-z]+/g)?.join(' ') ?? locator;

  return $(`~${selector}`);
}
