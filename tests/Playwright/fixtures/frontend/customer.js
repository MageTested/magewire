import { test as base } from '@playwright/test';
import process from "process";
import { has as hasMessage } from "../../helpers/messages";
import { login } from "../../helpers/customer/account";

const test = base.extend({
    magentoCustomerDashboard: async ({ page }, use) => {
        await page.goto('/customer/account/login');

        await page.getByRole('textbox', { name: 'Email' }).fill(process.env.ACCOUNT_EMAIL);
        await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ACCOUNT_PASSWORD);

        const button = page.locator('button[type="submit"]', { hasText: 'Sign In' });
        await button.click();

        await page.waitForURL('/customer/account/');

        await use(page);
    }
});

export { test };
