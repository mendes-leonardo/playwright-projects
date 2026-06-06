// @ts-check
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import userData from '../test-data/users.json'

const assertionLocators = {
  invetoryPageHeader: '[data-test="primary-header"]',
  invetoryPagePath: 'inventory'
}

test('should log in successfully when valid data are provided', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.accessPage()
  await loginPage.login(userData.validUser.username, userData.validUser.password)

  await expect(page.locator(assertionLocators.invetoryPageHeader)).toContainText('Swag Labs')
  await expect(page.url()).toContain(assertionLocators.invetoryPagePath);
});