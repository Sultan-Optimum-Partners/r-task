import { Page } from "@playwright/test";

export default class BasePage{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    selectWorkspaceButton = () => this.page.getByTestId('open-navigation');
    creationNavButton = () => this.page.locator("#nav-group-creation");
    contentNavButton = () => this.page.getByTestId('nav-button-content');
    navigationMenu = () => this.page.getByTestId('navigation-menu')

    async navigateToContent():Promise<void>{
        await this.selectWorkspaceButton().click();
        await this.creationNavButton().click();
        await this.contentNavButton().click();
    }

    // logut etc
  

}