# Test info

- Name: Human Resource Management >> Entering the given Username and Password
- Location: C:\Users\2397831\Desktop\Testing\Mini-pom\tests\example.spec.js:29:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeEditable()

Locator: getByPlaceholder('Usernameabc')
Expected: editable
Received: <element(s) not found>
Call log:
  - expect.toBeEditable with timeout 5000ms
  - waiting for getByPlaceholder('Usernameabc')

    at HomePage.login (C:\Users\2397831\Desktop\Testing\Mini-pom\pages\home.page.js:17:42)
    at C:\Users\2397831\Desktop\Testing\Mini-pom\tests\example.spec.js:30:25
```

# Page snapshot

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
   1 | const { expect } = require('@playwright/test');
   2 |
   3 | export class HomePage {
   4 |     constructor(page) {
   5 |         this.page = page;
   6 |         this.usernameInput = page.getByPlaceholder('Usernameabc');
   7 |         this.passwordInput = page.getByPlaceholder('Password');
   8 |         this.loginButton = page.locator('//button[@type="submit"]');
   9 |     }
  10 |
  11 |     async goto() {
  12 |         await this.page.goto("https://opensource-demo.orangehrmlive.com");
  13 |         await this.page.waitForTimeout(2000);
  14 |     }
  15 |
  16 |     async login(username, password) {
> 17 |         await expect(this.usernameInput).toBeEditable();
     |                                          ^ Error: Timed out 5000ms waiting for expect(locator).toBeEditable()
  18 |         await expect(this.usernameInput).toBeEmpty();
  19 |         await this.usernameInput.fill(username);
  20 |         await this.page.waitForTimeout(2000);
  21 |         await expect(this.passwordInput).toBeEditable();
  22 |         await expect(this.passwordInput).toBeEmpty();
  23 |         await this.passwordInput.fill(password);
  24 |         await this.page.waitForTimeout(2000);
  25 |         await expect(this.loginButton).toBeVisible();
  26 |         await expect(this.loginButton).toBeEnabled();
  27 |         await this.loginButton.click();
  28 |         await this.page.waitForTimeout(2000);
  29 |     }
  30 |
  31 |     async verifyUrl(expectedUrl) {
  32 |         await expect(this.page).toHaveURL(expectedUrl);
  33 |     }
  34 |
  35 |     async verifyUrlContains(text) {
  36 |         const currentUrl = await this.page.url();
  37 |         await expect(currentUrl).toContain(text);
  38 |         await this.page.waitForTimeout(1000);
  39 |     }
  40 | }
  41 |
```