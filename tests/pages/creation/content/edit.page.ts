import { Locator, Page } from "@playwright/test";
import { selectOption } from "./utilities/select-option.utils";

export default class ContentEditPage{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }
  
    addAHeadlineField = (): Locator => this.page.locator('[data-testid="title"]');
    headlinesTab = (): Locator => this.page.getByTestId('primary-tabs').getByTestId('tab-0');
    settingsTab = (): Locator => this.page.getByTestId('tab-2');
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
    settingsTagButton = (): Locator => this.page.getByTestId('tab-2');
    contentTypeSelect = (): Locator => this.page.getByTestId("content-type");
    sectionSelect = (): Locator => this.page.getByTestId("section");
    leadImageOrVideoContainer = (): Locator => this.page.getByTestId('TEXT_ABOVE');
    addLeadImageButton = (): Locator => this.page.getByRole('button', { name: 'Add Lead Image' });


    async addHeadline(headline: string): Promise<void>{
        await this.addAHeadlineField().click();
        await this.addAHeadlineField().type(headline + Date.now());
    }

    async clickHeadlinesTab(): Promise<void>{
        await this.headlinesTab().click();
    }

    async clickSettingsTab(): Promise<void>{
        await this.settingsTab().click();
    }

    async fillContentDetails(socialDek: string, indexDek: string, seoMetaDescription: string){
        await this.socialDek().fill(socialDek);
        await this.indexDek().fill(indexDek);
        await this.seoMetaDescription().fill(seoMetaDescription);
    }

    async clickAddSocialImageButton(): Promise<void> {
        await this.addSocialImageButton().click();
    }

    async clickAddIndexImageButton(): Promise<void> {
        await this.addIndexImageButton().click();
    }

    async clickSaveDraft(): Promise<void>{
        await this.saveDraftButton().click();
        await this.draftSavedButtton().waitFor()
    }

    async clickAddImageArticle(): Promise<void> {
        await this.leadImageOrVideoContainer().hover();
        await this.addLeadImageButton().click();
    }

    async fillSettingsRequiredFields():Promise<void>{
        await selectOption(this.contentTypeSelect(), this.page, 0);
        await selectOption(this.sectionSelect(), this.page, 0);
    }
}