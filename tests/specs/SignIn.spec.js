const { test, expect } = require('@playwright/test');
const LoginPage=require('../pages/loginpage');
import credentials from '../data/credentials';
import CommonTexts from '../helpers/enums/CommonText';


test('Login with Valid Credentials', async({page}) => {
  const loginPage = new LoginPage(page);
 
  await loginPage.navigate(credentials.baseurl);
  await loginPage.login(credentials.username, credentials.password);
  await expect(page.getByRole('banner')).toBeVisible(CommonTexts.loginWelcomeText);
})
test('Login with Invalid Credentials', async({page}) => {
  const loginPage = new LoginPage(page);
 
  await loginPage.navigate(credentials.baseurl);
  await loginPage.login(credentials.invalidUserName, credentials.invalidPassword);
  await expect(page.getByRole('alert').first()).toContainText(CommonTexts.loginErrorText);
  page.close();
})
