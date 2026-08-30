import {test} from "../fixtures/test-fixtures";
import {expect} from '@playwright/test';
import testData from '../test-data/testData.json'

test("Checkout Overview Test", async ({
     inventoryPage,
     cartPage,
     checkoutInformationPage,
     checkoutOverviwePage,
     checkoutCompletePage
}) => {
   
    await inventoryPage.addProductToCart("Sauce Labs Bike Light");

    await inventoryPage.clickShoppingCart();

    await cartPage.clickCheckoutButton();

    await expect(checkoutInformationPage.getInformationtitle()).toBeVisible();

    await checkoutInformationPage.FillFirstName(testData.checkout.firstName);
    await checkoutInformationPage.FillLastName(testData.checkout.lastName);
    await checkoutInformationPage.FillPostalCode(testData.checkout.postalCode);

    await checkoutInformationPage.clickContinueButton();

    await expect(checkoutOverviwePage.getOverviewTitle()).toBeVisible();

    await expect(checkoutOverviwePage.getProductName()).toHaveText("Sauce Labs Bike Light");
    await expect(checkoutOverviwePage.getProductDescription()).toHaveText("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
    await expect(checkoutOverviwePage.getProductPrice()).toHaveText("$9.99");      

    await checkoutOverviwePage.clickFinishButton();

    await expect(checkoutCompletePage.getCompleteTitle()).toBeVisible();

    await expect(checkoutCompletePage.getSuccessImage()).toBeVisible();
    await expect(checkoutCompletePage.getSuccessHeading()).toHaveText("Thank you for your order!");
    await expect(checkoutCompletePage.getSuccessMessage()).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");

    await checkoutCompletePage.clickBackHomeButton();

    await expect(inventoryPage.getProductsTitle()).toBeVisible();
});