import { Locator, Page } from "@playwright/test";

export default class Tenant {
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    selectTenantButton = (): Locator => this.page.locator('button[aria-label="Select Site"]');
    hearstDigitalMediaOption = (): Locator => this.page.locator('button', { has: this.page.locator('label', { hasText: 'Hearst Digital Media' }) });
    townAndCountryOption = (): Locator => this.page.locator('button', { has: this.page.locator('label', { hasText: 'Town & Country' }) });
    usOption = (): Locator => this.townAndCountryOption().locator('xpath=following-sibling::div//button[label[text()="US"]]');
    seletTenantButtonText = (): Locator => this.selectTenantButton().locator("span");
    
    async selectTownAndCountry(): Promise<void>{
        await this.selectTenantButton().click();
        await this.hearstDigitalMediaOption().click();
        await this.townAndCountryOption().click();
        await this.usOption().click();
    }

}