import { expect, Page } from "@playwright/test";

export default class BasePage{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    selectWorkspaceButton = () => this.page.getByTestId('open-navigation');
    creationNavButton = () => this.page.locator("#nav-group-creation");
    contentNavButton = () => this.page.getByTestId('nav-button-content');
    navigationMenu = () => this.page.getByTestId('navigation-menu')
    loadingIcon = () => this.page.getByTestId("loading-icon");

    async navigateToContent(): Promise<void>{
        await this.page.goto("creation/content");
        expect(this.page.url()).toContain("/creation/content");
    }

    async waitForLoadingIcon(): Promise<void>{
        this.loadingIcon().waitFor({ state: "visible" });
        this.loadingIcon().waitFor({ state: "hidden" });

    } 

}