import { test, expect } from '../fixtures/pages.fixtures';

test('create content test', async ({ page, loginPage, basePage, listContentPage, editContentPage, imageListPage, imageEditPage }) => {
  
  await loginPage.authenticate();

  expect(basePage.selectWorkspaceButton()).toBeVisible({timeout: 10000});

  await basePage.navigateToContent();

  expect(page.url()).toContain("/creation/content")

  await listContentPage.selectHomeAndTownTenant();

  expect(await listContentPage.getTenantName()).toEqual("Town & Country US")

  await listContentPage.createNewContentButton().click();

  expect(editContentPage.saveDraftButton()).toBeVisible({timeout: 10000});

  await editContentPage.addHeadlineAndDek("Headline", "Dek");
  
  await editContentPage.leadImageOrVideoContainer().hover();
  await editContentPage.addLeadImageButton().click();

  expect(imageListPage.images().first()).toBeVisible();

  await imageListPage.selectFirstImage(); 

  await imageEditPage.fillImageRequiredFields();
  
  await imageEditPage.backButton().click();

  await editContentPage.settingsTab().click();

  expect(editContentPage.contentTypeSelect()).toBeVisible();

  await editContentPage.fillSettingsRequiredFields()

  await editContentPage.saveDraftButton().click();

  await editContentPage.draftSavedButtton().waitFor()
  
  expect(editContentPage.draftSavedButtton()).toBeVisible();
 
});