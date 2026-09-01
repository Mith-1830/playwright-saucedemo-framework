import {Locator , Page} from '@playwright/test';

export class CartPage{

    private readonly page : Page;
    private readonly cartTitle : Locator;
    private readonly ContinueShopping : Locator;
    private readonly Checkout : Locator;

    constructor(page : Page) {
       this.page = page;
       this.cartTitle = this.page.locator('[data-test="title"]');
       this.ContinueShopping = this.page.locator('[data-test="continue-shopping"]');
       this.Checkout = this.page.locator('[data-test="checkout"]');
    }

    private getCartItem(productName : string) : Locator{
        return this.page
        .locator('.cart_item')
        .filter({
            has: this.page.getByText(productName)
        });
    }

    getCartTitle() : Locator{
        return this.cartTitle;
    }

    getProductName(productName : string) : Locator{
        const cartItem = this.getCartItem(productName);
        return cartItem.locator('[data-test="inventory-item-name"]');
    }

    getProductDescription(productName : string) : Locator{
        const cartItem = this.getCartItem(productName);
        return cartItem.locator('[data-test="inventory-item-desc"]');
    }

    getProductPrice(productName : string) : Locator{
        const cartItem = this.getCartItem(productName);
        return cartItem.locator('[data-test="inventory-item-price"]');
    }

    getRemoveButton(productName : string) : Locator{
        const cartItem = this.getCartItem(productName);
        return cartItem.getByRole('button' ,{name : 'Remove'})
    }
  
    async removeProductFromCart(productName : string) : Promise<void>{
        await this.getRemoveButton(productName).click();
    }

    async clickContinueShoppingButton() : Promise<void>{
        await this.ContinueShopping.click();
    }   

    async clickCheckoutButton() : Promise<void>{
        await this.Checkout.click();
    }
    
}