import { Page } from "@playwright/test";
import Tenant from "../../shared/tenant.shared";

export default class ContentListPage{
    readonly page: Page;
    readonly tenant: Tenant;
    constructor(page: Page, tenant: Tenant){
        this.page = page;
        this.tenant = tenant;
    }

    createNewContentButton = () => this.page.getByLabel('Create New Content');

    async clickCreateContent(){
        await this.createNewContentButton().click();
    }

    async selectHomeAndTownTenant(): Promise<void>{
        await this.tenant.selectTownAndCountry();
    }

    async getTenantName(): Promise<string>{
        return (await this.tenant.seletTenantButtonText().textContent())!;
    }
}