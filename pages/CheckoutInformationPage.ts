import { Locator , Page } from "@playwright/test";

export class CheckoutInformationPage{

    private readonly page : Page;
    private readonly informationTitle : Locator;
    private readonly firstNameInput : Locator;
    private readonly lastNameInput : Locator;
    private readonly postalCodeInput : Locator;
    private readonly continueButton : Locator;
    private readonly cancelButton :Locator;


    constructor(page : Page){
        this.page =page;
        this.informationTitle = this.page.locator('[data-test="title"]');
        this.firstNameInput = this.page.locator('[data-test="firstName"]');
        this.lastNameInput = this.page.locator('[data-test="lastName"]');
        this.postalCodeInput = this.page.locator('[data-test="postalCode"]');
        this.continueButton = this.page.locator('[data-test="continue"]');
        this.cancelButton = this.page.locator('[data-test="cancel"]');
        

    }


    getInformationtitle() : Locator{
        return this.informationTitle
    }
    
    async FillFirstName(firstName : string) : Promise<void>{
        await this.firstNameInput.fill(firstName);
    }

    async FillLastName(lastName : string) : Promise<void>{
        await this.lastNameInput.fill(lastName);
    }       

    async FillPostalCode(postalCode : string) : Promise<void>{
        await this.postalCodeInput.fill(postalCode);
    }
    
    async clickContinueButton() : Promise<void>{
       await this.continueButton.click();
   }

   async clickCancelButton() : Promise<void>{
       await this.cancelButton.click();
   }

}

