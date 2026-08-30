import {Locator , Page} from "@playwright/test";

export class CheckoutOverviewPage{

    private readonly page : Page;
    private readonly overviewtitle : Locator;
    private readonly productName : Locator;
    private readonly productDescription : Locator;
    private readonly productPrice : Locator;
    private readonly finishButton : Locator;
    private readonly cancelButton : Locator;

            constructor(page : Page){
            this.page = page;
            this.overviewtitle = this.page.locator('[data-test="title"]');
            this.productName = this.page.locator('.inventory_item_name');
            this.productDescription = this.page.locator('.inventory_item_desc');
            this.productPrice = this.page.locator('.inventory_item_price');
            this.finishButton = this.page.locator('[data-test="finish"]');
            this.cancelButton = this.page.locator('[data-test="cancel"]');

        }       

        getOverviewTitle() : Locator{
            return this.overviewtitle;
        }

        getProductName() : Locator{
            return this.productName;
        }

        getProductDescription() : Locator{
            return this.productDescription;
        }

        getProductPrice() : Locator{
            return this.productPrice;
        }

        async clickFinishButton() : Promise<void>{
             await this.finishButton.click();
        }

        async clickCancelButton() : Promise<void>{
            await this.cancelButton.click();
        }

    }

   