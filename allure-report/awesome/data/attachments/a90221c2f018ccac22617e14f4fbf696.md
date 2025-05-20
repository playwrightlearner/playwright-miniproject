# Test info

- Name: Human Resource Management >> Entering the given Username and Password
- Location: C:\Users\2397831\Desktop\Testing\Mini-pom\tests\example.spec.js:24:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

    at HomePage.goto (C:\Users\2397831\Desktop\Testing\Mini-pom\pages\home.page.js:12:25)
    at C:\Users\2397831\Desktop\Testing\Mini-pom\tests\example.spec.js:21:25
```

# Test source

```ts
   1 | const { expect } = require('@playwright/test');
   2 |
   3 | export class HomePage {
   4 |     constructor(page) {
   5 |         this.page = page;
   6 |         this.usernameInput = page.getByPlaceholder('Username');
   7 |         this.passwordInput = page.getByPlaceholder('Password');
   8 |         this.loginButton = page.locator('//button[@type="submit"]');
   9 |     }
  10 |
  11 |     async goto() {
> 12 |         await this.page.goto("https://opensource-demo.orangehrmlive.com");
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  13 |         await this.page.waitForTimeout(2000);
  14 |     }
  15 |
  16 |     async login(username, password) {
  17 |         await expect(this.usernameInput).toBeEditable();
  18 |         await expect(this.usernameInput).toBeEmpty();
  19 |         await this.usernameInput.fill(username);
  20 |         await this.page.waitForTimeout(2000);
  21 |         await expect(this.passwordInput).toBeEditable();
  22 |         await expect(this.passwordInput).toBeEmpty();
  23 |         await this.passwordInput.fill(password);
  24 |         await this.page.waitForTimeout(2000);
  25 |         await this.loginButton.click();
  26 |         await this.page.waitForTimeout(2000);
  27 |     }
  28 |
  29 |     async verifyUrl(expectedUrl) {
  30 |         await expect(this.page).toHaveURL(expectedUrl);
  31 |     }
  32 |
  33 |     async verifyUrlContains(text) {
  34 |         const currentUrl = await this.page.url();
  35 |         await expect(currentUrl).toContain(text);
  36 |         await this.page.waitForTimeout(1000);
  37 |     }
  38 | }
  39 |
```