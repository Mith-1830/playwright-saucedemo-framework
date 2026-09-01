import { test } from '../fixtures/test-fixtures';
import { expect } from '@playwright/test';

test('Login page Opens @smoke @regression', async ({ page, loginPage }) => {

    await expect(page).toHaveTitle('Swag Labs');

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.getByText('Products')).toBeVisible();

});

