import{Locator , Page}from '@playwright/test';

export class InventoryPage{

    private readonly page : Page;
    private readonly productsTitle : Locator;
    private readonly shoppingCart : Locator;
    private readonly sortDropdown : Locator;
    private readonly shoppingCartBadge : Locator;
    private readonly menuButton : Locator;
    private readonly logoutLink : Locator;
    private readonly aboutLink : Locator;
    private readonly resetAppStateLink : Locator;
    
    

    constructor(page : Page){
        this.page = page;
        this.productsTitle = this.page.getByText('Products');
        this.shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');  
        this.sortDropdown = this.page.locator('[data-test="product-sort-container"]');
        this.shoppingCartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
        this.menuButton = this.page.locator('#react-burger-menu-btn');
        this.logoutLink = this.page.locator('[data-test="logout-sidebar-link"]');
        this.aboutLink = this.page.locator('[data-test="about-sidebar-link"]');
        this.resetAppStateLink = this.page.locator('[data-test="reset-sidebar-link"]');
    }

    private getProductCard(productName : string) : Locator{
        return this.page
        .locator('.inventory_item')
        .filter({
            has: this.page.getByText(productName)
        });
    }


    getProductsTitle() : Locator{
        return this.productsTitle;
    }

    getShoppingCart() : Locator{
        return this.shoppingCart;
    }

    async clickShoppingCart(): Promise<void>{
        await this.shoppingCart.click();
    }

    async addProductToCart (productName : string): Promise<void>{
        const productCard = this.getProductCard(productName);
        const addToCartButton = productCard.getByRole('button',{name : 'Add to cart'})
        await addToCartButton.click();
    }

    getRemoveButton(productName : string) : Locator{
        const productCard = this.getProductCard(productName);
        return productCard.getByRole('button' ,{name : 'Remove'})
    }

    getProductName (productName : string) : Locator{
        const productCard = this.getProductCard(productName);
        return productCard.locator('[data-test="inventory-item-name"]');
    }

    async clickProduct(productName : string) : Promise<void>{
        await this.getProductName(productName).click();
    }

    getProductDescription(productName : string) : Locator{
        const productCard = this.getProductCard(productName);
        return productCard.locator('.inventory_item_desc');
    }

    getProductPrice(productName : string) : Locator{
        const productCard = this.getProductCard(productName);
        return productCard.locator('[data-test="inventory-item-price"]');
    }

    getProductImage(productName : string) : Locator{
        const productCard = this.getProductCard(productName);
        return productCard.locator('.inventory_item_img');
    }

    async removeProductFromCart(productName : string) : Promise<void>{
        await this.getRemoveButton(productName).click();
    }

    getInventoryItems() : Locator{
        return this.page.locator('.inventory_item');
    }

    async selectSortOption(option : string) : Promise<void>{
        await this.sortDropdown.selectOption(option);
    }

    getFirstProductName() : Locator{
        return this.getInventoryItems().first().locator('.inventory_item_name');
    }

    getShoppingCartBadge() : Locator{
        return this.shoppingCartBadge;
    }

    async clickMenuButton() : Promise<void>{
        await this.menuButton.click();
    }

    async clickLogoutLink() : Promise<void>{
        await this.logoutLink.click();
    }

    async clickAboutLink() : Promise<void>{
        await this.aboutLink.click();
    }

    async clickResetAppStateLink() : Promise<void>{
        await this.resetAppStateLink.click();
    }



       
}