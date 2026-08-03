import {test , expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login page Opens', async ({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    
    await expect(page).toHaveTitle('Swag Labs');

    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.getByText('Products')).toBeVisible();

})