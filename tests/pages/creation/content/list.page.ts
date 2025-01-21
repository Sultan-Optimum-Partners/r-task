import { expect, Page } from "@playwright/test";
import BasePage from "../../base.page";
import TenantSelection from "../../shared/tenant.shared";
import { TOWN_AND_COUNTRY } from "../../../constants";

export default class ContentListPage extends BasePage{
    readonly tenant: TenantSelection;
    constructor(page: Page, tenant: TenantSelection){
        super(page);
        this.tenant = tenant;
    }

    createNewContentButton = () => this.page.getByLabel('Create New Content');

    async selectHomeAndTownTenant(): Promise<void>{
        await this.tenant.selectTownAndCountry();
        expect(await this.getTenantName()).toEqual(TOWN_AND_COUNTRY)

    }

    async getTenantName(): Promise<string>{
        return (await this.tenant.seletTenantButtonText().textContent())!;
    }

    async createNewContent(): Promise<void> {
        await this.createNewContentButton().click();
        await this.waitForLoadingIcon();
    }
}