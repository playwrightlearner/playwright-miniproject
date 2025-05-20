export class JobTitlesPage {
    constructor(page) {
        this.page = page;
        this.addButton = page.locator('//button[normalize-space()="Add"]');
        this.jobTitleInput = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
        this.jobDescriptionInput = page.getByPlaceholder('Type description here');
        this.saveButton = page.locator('//button[@type="submit"]');
    }

    async addJob(jobTitle, jobDescription) {
        await this.addButton.click();
        await this.page.waitForTimeout(2000);
        await this.jobTitleInput.fill(jobTitle);
        await this.page.waitForTimeout(1000);
        await this.jobDescriptionInput.fill(jobDescription);
        await this.saveButton.hover();
        await this.page.waitForTimeout(1000);
        await this.saveButton.click();
        await this.page.waitForTimeout(1000);
    }
}