import { Page } from "@playwright/test";

export default class LoginPage{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    usernameLocator = () => this.page.getByLabel('Username');
    passwordLocator = () => this.page.getByLabel('Password');
    rememberMeLocator = () => this.page.getByText('Remember me');
    signInButtonLocator = () => this.page.getByRole('button', { name: 'Sign in' });
    needHelpLinkLocator = () => this.page.getByRole('link', { name: 'Need help signing in?' });
    forgotPasswordLinkLocator = () => this.page.getByRole('link', { name: 'Forgot your password?' });
    
    async authenticate(){
        await this.usernameLocator().fill(process.env.USERNAME!);
        await this.passwordLocator().fill(process.env.PASSWORD!);
        await this.signInButtonLocator().click();
    }
}