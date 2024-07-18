const { test, expect } = require('@playwright/test');
const CheckoutPage=require('../pages/checkoutpage');
import credentials from '../data/credentials';
import CommonTexts from '../helpers/enums/CommonText';

test('Checkout Scenario', async({page}) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.navigate(credentials.baseurl);
  await checkoutPage.signIn(credentials.username, credentials.password);
  await checkoutPage.addToCart();
  await checkoutPage.proceedToCheckout();
  await checkoutPage.gotoNextPage();
  await expect(page.locator('#checkout-payment-method-load')).toContainText(CommonTexts.payment);
  await checkoutPage.paymentMethod();
  await expect(page.getByText(CommonTexts.purchaseMessage)).toBeVisible();
  await expect(page.getByText(CommonTexts.orderConfirmationMessage)).toBeVisible();
}
)