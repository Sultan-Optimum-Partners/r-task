import { Locator, Page } from "@playwright/test";

export default class TenantSelection {
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    hearstDigitalMediaOption = (): Locator => this.page.locator('button', { has: this.page.locator('label', { hasText: 'Hearst Digital Media' }) });
    seletTenantButtonText = (): Locator => this.selectTenantButton().locator("span");
    townAndCountryOption = (): Locator => this.page.locator('button', { has: this.page.locator('label', { hasText: 'Town & Country' }) });
    selectTenantButton = (): Locator => this.page.locator('button[aria-label="Select Site"]');
    usOption = (): Locator => this.townAndCountryOption().locator('xpath=following-sibling::div//button[label[text()="US"]]');
    
    async selectTownAndCountry(): Promise<void>{    
        await this.selectTenantButton().click();
        await this.hearstDigitalMediaOption().click();
        await this.townAndCountryOption().click();
        await this.usOption().click();
    }

}


