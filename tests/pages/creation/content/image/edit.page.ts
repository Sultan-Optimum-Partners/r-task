import { Locator, Page } from "@playwright/test";
import { selectOption } from "../utilities/select-option.utils";

export default class ImageEditPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    copyrightsSelect = (): Locator => this.page.locator('fieldset[data-testid*=copyright]');
    photoCreditSelect = (): Locator => this.page.locator('fieldset[data-testid*=photoCredit]');
    syndicationRightsSelect = (): Locator => this.page.locator('fieldset[data-testid*=syndicationRights]');
    imageRightsSelect = (): Locator => this.page.locator('fieldset[data-testid*=imageRights]');
    imageTitle = (): Locator => this.page.locator('[data-testid*=imageTitle-input]');
    seoAltText = (): Locator => this.page.locator('[data-testid*=seoAltText-input]');
    backButton = (): Locator => this.page.getByRole('button', { name: 'Close Drawer' });

    async fillImageRequiredFields(){
        await selectOption(this.copyrightsSelect(), this.page, 0);
        await selectOption(this.syndicationRightsSelect(), this.page, 0);
        await selectOption(this.imageRightsSelect(), this.page, 0);
        await this.imageTitle().fill("test2.jpg");
        await this.seoAltText().fill("jaja");      
    }

    async clickBackButton(): Promise<void> {
        await this.backButton().click();
    }
    
}