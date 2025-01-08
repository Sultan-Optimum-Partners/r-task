import { Locator, Page } from "@playwright/test";

/**
 * Selects an option from a dropdown menu by index.
 *
 * @param selectLocator - The Playwright locator for the dropdown element to be clicked.
 * @param page - The Playwright page instance.
 * @param index - The zero-based index of the dropdown option to select.
 * @returns A promise that resolves after the option is selected.
 */
export async function selectOption(selectLocator: Locator, page: Page, index: number): Promise<void> {
    let menuOptions = page.locator('[class$="menu"] > div > div');
    await selectLocator.click();
    await menuOptions.nth(index).click();
}
