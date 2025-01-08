import { Locator, Page } from "@playwright/test";

export default class ImageListPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    images = (): Locator => this.page.getByTestId('card-article');
    
    async selectFirstImage(): Promise<void> {
        await this.images().first().click();
    }
}