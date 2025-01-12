import { Locator, Page } from "@playwright/test";
import BasePage from "../../base.page";
import { selectOption } from "./utilities/select-option.utils";

export default class ContentEditPage extends BasePage{
    constructor(page: Page){
        super(page);
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
}