# Test info

- Name: Human Resource Management >> Geting the List of All Jobs Available
- Location: C:\Users\2397831\Desktop\Testing\Mini-pom\tests\example.spec.js:51:5

# Error details

```
Error: elementHandle.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator(':scope')

    at AdminPage.getJobList (C:\Users\2397831\Desktop\Testing\Mini-pom\pages\admin.page.js:32:34)
    at C:\Users\2397831\Desktop\Testing\Mini-pom\tests\example.spec.js:52:24
```

# Test source

```ts
   1 | const { expect } = require('@playwright/test');
   2 |
   3 | export class AdminPage {
   4 |     constructor(page) {
   5 |         this.page = page;
   6 |         this.adminTab = page.locator(`//li['class="oxd-main-menu-item-wrapper"'][1]//a`);
   7 |         this.jobTab = page.locator('//li//span[@class="oxd-topbar-body-nav-tab-item" and contains(text(),"Job ")]');
   8 |         this.jobTitlesLink = page.locator('//ul//li//a[@role="menuitem" and contains(text(),"Job Titles")]');
   9 |     }
  10 |
  11 |     async goToAdminTab() {
  12 |         await this.adminTab.click();
  13 |         await this.page.waitForTimeout(1000);
  14 |     }
  15 |
  16 |     async goToJobTab() {
  17 |         await this.jobTab.click();
  18 |         await this.page.waitForTimeout(1000);
  19 |     }
  20 |
  21 |     async goToJobTitles() {
  22 |         await expect(this.jobTitlesLink).toBeVisible();
  23 |         await this.page.waitForTimeout(1000);
  24 |         await this.jobTitlesLink.click();
  25 |         await this.page.waitForTimeout(1000);
  26 |     }
  27 |
  28 |     async getJobList() {
  29 |         const jobs = await this.page.$$('//div[@role="cell" and @style="flex: 2 1 0%;"]//div');
  30 |         let jobList = [];
  31 |         for (let job of jobs) {
> 32 |             let role = await job.textContent();
     |                                  ^ Error: elementHandle.textContent: Target page, context or browser has been closed
  33 |             console.log(role);
  34 |             jobList.push(role);
  35 |         }
  36 |         await this.page.waitForTimeout(2000);
  37 |         return jobList;
  38 |     }
  39 | }
  40 |
```