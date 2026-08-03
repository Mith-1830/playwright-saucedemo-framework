import { Locator , Page} from '@playwright/test';

export class LoginPage{

    private readonly page : Page;
    private readonly usernameInput : Locator;
    private readonly passwordInput : Locator;
    private readonly loginButton : Locator;

    constructor(page : Page){
         this.page = page;
         this.usernameInput = this.page.getByPlaceholder("Username");
         this.passwordInput = this.page.getByPlaceholder("Password");
         this.loginButton = this.page.getByRole('button', { name: "Login" });
    }

    async navigateToLoginPage(){
        await this.page.goto('/');
    }
    async enterUsername(username : string){
        await this.usernameInput.fill(username);
    }
    async enterPassword(password : string){
        await this.passwordInput.fill(password);
    }
    async clickLoginButton(){
        await this.loginButton.click();
    }
    async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
}
}




 

