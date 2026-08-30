import {test } from '../fixtures/test-fixtures';
import { expect } from '@playwright/test';



test("Add Backpack to cart and remove it from cart", async ({ page , inventoryPage , cartPage }) => {
    
    await inventoryPage.addProductToCart("Sauce Labs Backpack");

    await inventoryPage.clickShoppingCart();

    await expect(cartPage.getCartTitle()).toBeVisible();

    await expect(
        cartPage.getProductName("Sauce Labs Backpack")
    ).toBeVisible();

    await expect(
        cartPage.getProductDescription("Sauce Labs Backpack")
    ).toBeVisible()

    await expect(
        cartPage.getProductPrice("Sauce Labs Backpack")
    ).toBeVisible()

     await expect(
        cartPage.getRemoveButton("Sauce Labs Backpack")
    ).toBeVisible()

    await cartPage.removeProductFromCart("Sauce Labs Backpack");

    await expect(cartPage.getProductName("Sauce Labs Backpack")).not.toBeVisible();

    //await cartPage.clickContinueShoppingButton();

    await cartPage.clickCheckoutButton();

    

});



