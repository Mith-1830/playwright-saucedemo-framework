import {test , expect} from '../fixtures/baseTest';
import testData from '../test-data/testData.json';
import { SortOptions } from '../constants/sortOptions';

for (const product of testData.products) {

    test(`Add ${product.name} to cart @regression`, async ({ inventoryPage, page }) => {

        await inventoryPage.addProductToCart(product.name);

        const removeButton = inventoryPage.getRemoveButton(product.name);
        await expect(removeButton).toBeVisible();

        const productTitle = inventoryPage.getProductsTitle();
        await expect(productTitle).toBeVisible();

        const shoppingCart = inventoryPage.getShoppingCart();
        await expect(shoppingCart).toBeVisible();

        await inventoryPage.selectSortOption(SortOptions.Z_TO_A);

        await expect(
            inventoryPage.getFirstProductName()
        ).toHaveText("Test.allTheThings() T-Shirt (Red)");

        await inventoryPage.clickMenuButton();

        await expect(
            inventoryPage.getShoppingCartBadge()
        ).toHaveText("1");

        await inventoryPage.clickLogoutLink();

        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
}