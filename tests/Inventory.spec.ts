import {test , expect} from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test("Add Backpack to cart", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login("standard_user", "secret_sauce");

    await inventoryPage.addProductToCart("Sauce Labs Bike Light");


   const removeButton = inventoryPage.getRemoveButton("Sauce Labs Bike Light");
   await expect(removeButton).toBeVisible();

   const productTitle = inventoryPage.getProductsTitle();
   await expect(productTitle).toBeVisible();

   const shoppingCart = inventoryPage.getShoppingCart();
   await expect(shoppingCart).toBeVisible();

   await inventoryPage.selectSortOption("za");

   await expect(inventoryPage.getFirstProductName())
   .toHaveText("Test.allTheThings() T-Shirt (Red)");

   //await expect(inventoryPage.getShoppingCartBadge()).toHaveText("1");

   await inventoryPage.clickMenuButton();
   await expect(inventoryPage.getShoppingCartBadge()).toHaveText("1");
   await inventoryPage.clickLogoutLink();
   await expect(page).toHaveURL('https://www.saucedemo.com/');
});