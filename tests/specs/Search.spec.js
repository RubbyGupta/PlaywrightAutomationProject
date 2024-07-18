const { test, expect } = require('@playwright/test');
const SearchPage=require('../pages/searchpage');
import loginDetails from '../data/credentials';
import CommonTexts from '../helpers/enums/CommonText';


test('Search for Woman top', async({page}) => {
  const searchPage = new SearchPage(page);
 
  await searchPage.navigate(loginDetails.baseurl);
  await searchPage.search(CommonTexts.searchCategory);
  await expect(page.locator('h1')).toBeVisible(CommonTexts.searchValidationText);
  await expect(page.locator('#maincontent')).toBeVisible(CommonTexts.searchValidationCount);
  page.close();
})