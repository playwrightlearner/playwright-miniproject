const { expect } = require('@playwright/test');

export class LogoutPage {
    constructor(page) {
        this.page = page;
        this.userDropdown = page.locator('//div/ul/li/span[@class="oxd-userdropdown-tab"]');
        this.logoutLink = page.locator('//li//a[@role="menuitem" and contains(text(),"Logout")]');
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutLink.click();
        await this.page.waitForTimeout(1000);
    }
}