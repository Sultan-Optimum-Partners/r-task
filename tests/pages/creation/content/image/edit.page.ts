import { Locator, Page } from "@playwright/test";
import { selectOption } from "../shared/select-option.utils";
import BasePage from "../../../base.page";

export default class ImageEditPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    copyrightsSelect = (): Locator => this.page.locator('fieldset[data-testid*=copyright]');
    photoCreditSelect = (): Locator => this.page.locator('fieldset[data-testid*=photoCredit]');
    syndicationRightsSelect = (): Locator => this.page.locator('fieldset[data-testid*=syndicationRights]');
    imageRightsSelect = (): Locator => this.page.locator('fieldset[data-testid*=imageRights]');
    imageTitle = (): Locator => this.page.locator('[data-testid*=imageTitle-input]');
    seoAltText = (): Locator => this.page.locator('[data-testid*=seoAltText-input]');
    closeDrawer = (): Locator => this.page.getByRole('button', { name: 'Close Drawer' });

    async fillImageRequiredFields(){
        await selectOption(this.copyrightsSelect(), this.page, 0);
        await selectOption(this.syndicationRightsSelect(), this.page, 0);
        await selectOption(this.imageRightsSelect(), this.page, 0);
        await this.imageTitle().fill("test2.jpg");
        await this.seoAltText().fill("jaja");      
    }
    
}