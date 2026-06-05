import { test, expect } from '@playwright/test'
import userData from '../tests-data/users.json'


test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
});

test('should log in successfully when valid data are provided', async ({ page }) => {
  await page.locator('[data-test="username"]').pressSequentially(userData.validUser.username, { delay : 100 })
  await page.locator('[data-test="password"]').pressSequentially(userData.validUser.password, { delay : 100 })
  await page.locator('[data-test="login-button"]').click()
  
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs')
  await expect(page).toHaveURL(/inventory/)
});

test('should not log in when an invalid password is provided', async ({ page }) => {
  await page.locator('[data-test="username"]').pressSequentially(userData.validUser.username, { delay : 100 })
  await page.locator('[data-test="password"]').pressSequentially(userData.invalidUserPassword.password, { delay : 100 })
  await page.locator('[data-test="login-button"]').click();
  
  const errorMessage = await page.locator('.error.error-message-container').textContent()

  expect(errorMessage.includes('do not match any user ')).toBeTruthy()
});