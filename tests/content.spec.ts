import { test, expect } from '../fixtures/pages.fixtures';

test('Create content test', async ({ page, loginPage, basePage, listContentPage, editContentPage }) => {

  await loginPage.authenticate();
  await expect(basePage.selectWorkspaceButton()).toBeVisible();
  // login

  await listContentPage.navigateToContent();
  await listContentPage.selectHomeAndTownTenant();
  // go to content & setup tenant 

  await listContentPage.createNewContent();
  // navigate to creation page

  await editContentPage.addHeadlineAndDek("Headline", "Dek");
  await editContentPage.insertLeadImage();
  await editContentPage.setupSettingsTab();
  // fill everything required to create content
  
  await editContentPage.saveDraftButton().click(); 
  // save draft

  await expect(editContentPage.draftSavedButtton()).toBeVisible();

});