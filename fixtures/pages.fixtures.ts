import { test as base } from '@playwright/test';
import LoginPage from "../tests/pages/login.page";
import TenantSelection from '../tests/pages/shared/tenant.shared';
import ContentListPage from '../tests/pages/creation/content/list.page';
import ContentEditPage from '../tests/pages/creation/content/edit.page';
import ImageEditPage from '../tests/pages/creation/content/image/edit.page';
import ImageListPage from '../tests/pages/creation/content/image/list.page';
import BasePage from '../tests/pages/base.page';

type fixtures = {
    loginPage: LoginPage,
    listContentPage: ContentListPage,
    editContentPage: ContentEditPage,
    imageEditPage: ImageEditPage, 
    imageListPage: ImageListPage,
    tenant: TenantSelection, 
    basePage: BasePage
};

export const test = base.extend<fixtures>({
    page: async ({ page }, use) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        use(page);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        use(loginPage);
    },
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        use(basePage);
    },
    listContentPage: async ({ page }, use) => {
        const tenant = new TenantSelection(page);
        const listContentPage = new ContentListPage(page, tenant);
        use(listContentPage); 
    },
    editContentPage: async ({ page }, use) => {
        const imageEditPage = new ImageEditPage(page);
        const imageListPage = new ImageListPage(page);
        const editContentPage = new ContentEditPage(page, imageListPage, imageEditPage);
        use(editContentPage);
    },
});

export { expect } from '@playwright/test';