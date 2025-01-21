import { expect, Locator, Page } from "@playwright/test";
import BasePage from "../../base.page";
import { selectOption } from "./shared/select-option.utils";
import ImageListPage from "./image/list.page";
import ImageEditPage from "./image/edit.page";

export default class ContentEditPage extends BasePage{
    readonly imageListPage: ImageListPage;
    readonly imageEditPage: ImageEditPage;

    constructor(page: Page, imageListPage: ImageListPage, imageEditPage: ImageEditPage){
        super(page);
        this.imageListPage = imageListPage;
        this.imageEditPage = imageEditPage;
    }
  
    addAHeadlineField = (): Locator => this.page.locator('[data-testid="title"]');
    headlinesTab = (): Locator => this.page.getByTestId('primary-tabs').getByTestId('tab-0');
    settingsTab = (): Locator => this.page.getByTestId('sidebar-nav-button-settings');
    slug = (): Locator => this.page.getByTestId('slug-input');
    socialHeadline = (): Locator => this.page.getByTestId('socialTitle').getByRole('paragraph');
    socialDek = (): Locator => this.page.getByTestId('socialDek').getByRole('paragraph');
    indexHeadline = (): Locator => this.page.getByTestId('indexTitle').getByRole('paragraph');
    indexShortHeadline = (): Locator => this.page.getByTestId('shortTitle').getByRole('paragraph');
    indexDek = (): Locator => this.page.getByTestId('indexDek').getByRole('paragraph');
    seoMetaTitle = (): Locator => this.page.getByTestId('seoMetaTitle-input');
    seoMetaDescription = (): Locator => this.page.getByTestId('seoMetaDescription-input');
    addSocialImageButton = (): Locator => this.page.getByRole('group', { name: 'Social' }).getByRole('button');
    addIndexImageButton = (): Locator => this.page.getByRole('group', { name: 'Index' }).getByRole('button');
    saveDraftButton = (): Locator => this.page.locator('button', { hasText: 'Save Draft' });
    draftSavedButtton = (): Locator => this.page.locator('//span[text()="Draft Saved"]');
    contentTypeSelect = (): Locator => this.page.getByTestId("content-type");
    sectionSelect = (): Locator => this.page.getByTestId("section");
    leadImageOrVideoContainer = (): Locator => this.page.getByTestId('TEXT_ABOVE');
    addLeadImageButton = (): Locator => this.page.getByRole('button', { name: 'Add Lead Image' });

    addDekField = (): Locator => this.page.getByTestId("dek");

    async addHeadlineAndDek(headline: string, dek: string): Promise<void>{
        await this.addAHeadlineField().click();
        await this.addAHeadlineField().type(headline + "-" + Date.now());
        await this.addDekField().click();
        await this.addDekField().type(dek);
        await expect(this.slug()).toHaveValue(headline);
        await expect(this.socialDek()).toHaveValue(dek);

    }

    async fillContentDetails(socialDek: string, indexDek: string, seoMetaDescription: string){
        await this.socialDek().fill(socialDek);
        await this.indexDek().fill(indexDek);
        await this.seoMetaDescription().fill(seoMetaDescription);
    }

    async fillSettingsRequiredFields():Promise<void>{
        await selectOption(this.contentTypeSelect(), this.page, 0);
        await selectOption(this.sectionSelect(), this.page, 0);
    }

    async insertLeadImage(): Promise<void>{
        await this.leadImageOrVideoContainer().hover();
        await this.addLeadImageButton().click();
        await expect(this.imageListPage.images().first()).toBeVisible();
        await this.imageListPage.selectFirstImage(); 
        await this.imageEditPage.closeDrawer().waitFor({state: "visible"})
        await this.imageEditPage.fillImageRequiredFields();
        await this.imageEditPage.closeDrawer().click();
    }

    async setupSettingsTab(): Promise<void>{
        await this.settingsTab().click();

        expect(this.contentTypeSelect()).toBeVisible();
      
        await this.fillSettingsRequiredFields()
      
    }


}