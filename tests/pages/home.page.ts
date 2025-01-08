import { Page } from "@playwright/test";

export default class HomePage{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    selectWorkspaceButton = () => this.page.getByTestId('open-navigation');
    creationNavButton = () => this.page.locator("#nav-group-creation");
    contentNavButton = () => this.page.getByTestId('nav-button-content');
    navigationMenu = () => this.page.getByTestId('navigation-menu')

    async openSelectWorkspace(){
        await this.selectWorkspaceButton().click();
    } 

    async selectCreation(){
        await this.creationNavButton().click();
    }

    async selectContent(){
        await this.contentNavButton().click();
    }

    async navigateToContent():Promise<void>{
        await this.openSelectWorkspace();  
        await this.selectCreation();
        await this.selectContent();
    }
  

}