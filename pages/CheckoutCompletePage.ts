import { Locator , Page } from "@playwright/test"; 

export class CheckoutCompletePage{

    private readonly page : Page;
    private readonly completeTitle : Locator;
    private readonly successImage : Locator;
    private readonly successHeading : Locator;
    private readonly successMessage : Locator;
    private readonly backHomeButton : Locator;


    constructor(page : Page){
        this.page = page;
        this.completeTitle = this.page.locator('[data-test="title"]');
        this.successImage = this.page.locator('.pony_express');
        this.successHeading = this.page.locator('.complete-header');
        this.successMessage = this.page.locator('[data-test="complete-text"]');
        this.backHomeButton = this.page.locator('[data-test="back-to-products"]');


    }

    getCompleteTitle() : Locator{
        return this.completeTitle;
    }

    getSuccessImage() : Locator{
        return this.successImage;
    }   

    getSuccessHeading() : Locator{
        return this.successHeading;
    }

    getSuccessMessage() : Locator{
        return this.successMessage;
    }   

    async clickBackHomeButton() : Promise<void>{
        await this.backHomeButton.click();
    }

}