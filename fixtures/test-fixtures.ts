import 'dotenv/config';
import { test as base , expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInformationPage} from '../pages/CheckoutInformationPage'
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutInformationPage: CheckoutInformationPage;
  checkoutOverviwePage : CheckoutOverviewPage;
  checkoutCompletePage : CheckoutCompletePage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login(
           process.env.SAUCE_USERNAME!,
           process.env.SAUCE_PASSWORD!
    );
    await use(loginPage);

},  

   inventoryPage: async ({ page , loginPage}, use) => {

    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);
},

   cartPage: async ({ page }, use) => {

    const cartPage = new CartPage(page);

    await use(cartPage);
},

  checkoutInformationPage: async ({page},use) => {

    const checkoutInformationPage = new CheckoutInformationPage(page);

    await use(checkoutInformationPage);
  },

  checkoutOverviwePage : async({page},use) =>{

    const checkoutOverviwePage = new CheckoutOverviewPage(page);

    await use (checkoutOverviwePage);
  },

  checkoutCompletePage : async({page},use)=>{

    const checkoutCompletePage = new CheckoutCompletePage(page);

    await use(checkoutCompletePage)
  }

});

export { expect };