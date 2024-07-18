const { title } = require("process");

class CheckoutPage {
    
    constructor(page) {
        this.page = page;
      }
      async navigate(url) {
        await this.page.goto(url);
      }
    
      async signIn(username, password) {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await this.page.getByLabel('Email', { exact: true }).click();
        await this.page.getByLabel('Email', { exact: true }).fill(username);
        await this.page.getByLabel('Email', { exact: true }).press('Tab');
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByRole('button', { name: 'Sign In' }).click();
      }

      async addToCart() {
        await this.page.getByRole('menuitem', { name: ' Women' }).click();
        await this.page.getByText('Women New Luma Yoga').click();
        await this.page.locator('.page-title-wrapper').dblclick();
        await this.page.locator('body').press('ArrowDown');
        await this.page.locator('li').filter({ hasText: 'Radiant Tee Rating: 60% 3' }).getByLabel('XS').click();
        await this.page.locator('li').filter({ hasText: 'Radiant Tee Rating: 60% 3' }).getByLabel('Blue').click();
        await this.page.locator('li').filter({ hasText: 'Radiant Tee Rating: 60% 3' }).getByRole('button').click();
     }

      async proceedToCheckout() {
        await this.page.click('a[href="https://magento.softwaretestingboard.com/checkout/cart/"]');  
        await this.page.locator('body').press('ArrowDown');
        await this.page.locator('//span[normalize-space()="Proceed to Checkout"]').click();
        }

      async gotoNextPage() {
        await this.page.getByRole('button', { name: 'Next' }).click();
    }

    async paymentMethod() {
      await this.page.getByRole('button', { name: 'Place Order' }).click();
    }
  }
    module.exports=CheckoutPage;
    