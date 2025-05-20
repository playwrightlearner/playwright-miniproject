const { expect } = require('@playwright/test');

export class HomePage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('//button[@type="submit"]');
    }

    async goto() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com");
        await this.page.waitForTimeout(2000);
    }

    async login(username, password) {
        await expect(this.usernameInput).toBeEditable();
        await expect(this.usernameInput).toBeEmpty();
        await this.usernameInput.fill(username);
        await this.page.waitForTimeout(2000);
        await expect(this.passwordInput).toBeEditable();
        await expect(this.passwordInput).toBeEmpty();
        await this.passwordInput.fill(password);
        await this.page.waitForTimeout(2000);
        await expect(this.loginButton).toBeVisible();
        await expect(this.loginButton).toBeEnabled();
        await this.loginButton.click();
        await this.page.waitForTimeout(2000);
    }

    async verifyUrl(expectedUrl) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async verifyUrlContains(text) {
        const currentUrl = await this.page.url();
        await expect(currentUrl).toContain(text);
        await this.page.waitForTimeout(1000);
    }
}
