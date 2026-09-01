import {test} from '../fixtures/test-fixtures';
import {expect} from '@playwright/test'
import testData from '../test-data/testData.json'

test("Add Backpack to cart and proceed to checkout", async ({
    inventoryPage,
    cartPage , 
    checkoutInformationPage
})=>{
    await inventoryPage.addProductToCart("Sauce Labs Backpack");

    await inventoryPage.clickShoppingCart();

    await cartPage.clickCheckoutButton();

    await expect(checkoutInformationPage.getInformationtitle()).toBeVisible();

    await checkoutInformationPage.FillFirstName(testData.checkout.firstName);
    await checkoutInformationPage.FillLastName(testData.checkout.lastName);
    await checkoutInformationPage.FillPostalCode(testData.checkout.postalCode);

    await checkoutInformationPage.clickContinueButton();
});


