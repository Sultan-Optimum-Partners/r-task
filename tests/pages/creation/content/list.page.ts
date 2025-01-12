import { Page } from "@playwright/test";
import BasePage from "../../base.page";
import TenantSelection from "../../shared/tenant.shared";

export default class ContentListPage extends BasePage{
    readonly tenant: TenantSelection;
    constructor(page: Page, tenant: TenantSelection){
        super(page);
        this.tenant = tenant;
    }

    createNewContentButton = () => this.page.getByLabel('Create New Content');

    async selectHomeAndTownTenant(): Promise<void>{
        await this.tenant.selectTownAndCountry();
    }

    async getTenantName(): Promise<string>{
        return (await this.tenant.seletTenantButtonText().textContent())!;
    }
}