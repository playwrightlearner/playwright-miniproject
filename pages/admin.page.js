const { expect } = require('@playwright/test');

export class AdminPage {
    constructor(page) {
        this.page = page;
        this.adminTab = page.locator(`//li['class="oxd-main-menu-item-wrapper"'][1]//a`);
        this.jobTab = page.locator('//li//span[@class="oxd-topbar-body-nav-tab-item" and contains(text(),"Job ")]');
        this.jobTitlesLink = page.locator('//ul//li//a[@role="menuitem" and contains(text(),"Job Titles")]');
    }

    async goToAdminTab() {
        await this.adminTab.click();
        await this.page.waitForTimeout(1000);
    }

    async goToJobTab() {
        await this.jobTab.click();
        await this.page.waitForTimeout(1000);
    }

    async goToJobTitles() {
        await expect(this.jobTitlesLink).toBeVisible();
        await this.page.waitForTimeout(1000);
        await this.jobTitlesLink.click();
        await this.page.waitForTimeout(1000);
    }

    async getJobList() {
        const jobs = await this.page.$$('//div[@role="cell" and @style="flex: 2 1 0%;"]//div');
        let jobList = [];
        for (let job of jobs) {
            let role = await job.textContent();
            // console.log(role);
            jobList.push(role);
        }
        await this.page.waitForTimeout(2000);
        return jobList;
    }
}
