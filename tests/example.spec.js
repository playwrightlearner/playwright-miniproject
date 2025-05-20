const { test, expect } = require('@playwright/test');
import jsonvalues from '../JSONfiles/input.json';
const path = require('path');
const fs = require('fs');
const { HomePage } = require('../pages/home.page.js');
const { AdminPage } = require('../pages/admin.page.js');
const { JobTitlesPage } = require('../pages/jobtitles.page.js');
const { LogoutPage } = require('../pages/Logout.page.js');

test.describe('Human Resource Management', () => {
    let page;
    let loginPage;
    let adminPage;
    let jobTitlesPage;
    let logoutPage;
    test.beforeAll("Going to the webpage", async ({ browser }) => {
        page = await browser.newPage();
        // page = await br.newPage();
        loginPage = new HomePage(page);
        adminPage = new AdminPage(page);
        jobTitlesPage = new JobTitlesPage(page);
        logoutPage = new LogoutPage(page);
        await loginPage.goto();
        await page.screenshot({ path: 'screenshots/goingtowebpage.png' });
    });
    test.afterEach('time', async () => {
        await page.waitForTimeout(2000);
    })
    test('Entering the given Username and Password', async () => {
        await loginPage.login(jsonvalues.username, jsonvalues.password);
    });

    test('Verifying the current URL and check if it contains the string “dashboard”', async () => {
        await loginPage.verifyUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await loginPage.verifyUrlContains('dashboard');
    });

    test('Going to Admin Tab', async () => {
        await adminPage.goToAdminTab();
    });

    test('Going to the Job tab and checking ‘Job Titles’ is there or not.', async () => {
        await adminPage.goToJobTab();
    });

    test('Clicking on “Job Titles”', async () => {
        await adminPage.goToJobTitles();
    });

    test('Geting the List of All Jobs Available', async () => {
        let jobList1 = await adminPage.getJobList();
        console.log(jobList1)
        let path1 = path.join(__dirname, '../JSONfiles/output.json');
        fs.writeFileSync(path1, JSON.stringify(jobList1, null, 1));
    });

    test('Clicking on “Add Button” icon, adding job as “Automation Tester”.', async () => {
        let jobList1 = await adminPage.getJobList();
        if (!(jobList1.includes(jsonvalues.job))) {
            console.log('Job title already exists');
            // test.skip()
        }
        else {
            await jobTitlesPage.addJob(jsonvalues.job, jsonvalues.Description);
        }
    });

    test('Logout and closing the browser', async () => {
        try {
            await logoutPage.logout();
        }
        catch (e) {
            console.log('Logout was unsuccessful');
        }
    });
});
