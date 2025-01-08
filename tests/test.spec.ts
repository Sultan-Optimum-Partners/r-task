import { test, expect } from '../fixtures/pages.fixtures';

test('create content test', async ({ page, loginPage, homePage, listContentPage, editContentPage, imageListPage, imageEditPage }) => {
  
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  expect(homePage.selectWorkspaceButton()).toBeVisible({timeout: 10000});

  await homePage.navigateToContent();

  expect(page.url()).toContain("/creation/content")

  await listContentPage.selectHomeAndTownTenant();

  expect(await listContentPage.getTenantName()).toEqual("Town & Country US")

  await listContentPage.clickCreateContent();

  expect(editContentPage.saveDraftButton()).toBeVisible({timeout: 10000});

  await editContentPage.addHeadline("Brrr");
  await editContentPage.fillContentDetails("Brrrr","Brrrr","Brrrr");
  await editContentPage.clickAddSocialImageButton();

  expect(imageListPage.images().first()).toBeVisible()

  await imageListPage.selectFirstImage();
  await imageEditPage.fillImageRequiredFields();
  await imageEditPage.clickBackButton();
  await editContentPage.clickSettingsTab();

  expect(editContentPage.contentTypeSelect()).toBeVisible();

  await editContentPage.fillSettingsRequiredFields()
  await editContentPage.clickAddImageArticle();

  expect(imageListPage.images().first()).toBeVisible();

  await imageListPage.selectFirstImage(); 
  await imageEditPage.fillImageRequiredFields();
  await editContentPage.clickSaveDraft();
  
  expect(editContentPage.draftSavedButtton()).toBeVisible();
 
});