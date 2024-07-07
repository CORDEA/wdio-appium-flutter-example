import HomePage from "../pageobjects/home.page.ts";

describe("My application", () => {
  it("should login with valid credentials", async () => {
    await expect(HomePage.example1()).toBeDisplayed();
    await expect(HomePage.example2()).toBeDisplayed();
    await expect(HomePage.example3()).toBeDisplayed();
    await expect(HomePage.example4()).toBeDisplayed();
    await expect(HomePage.example5()).toBeDisplayed();
    await expect(HomePage.example5()).toBeDisabled();
    const example6 = await HomePage.example6();
    if (example6) {
      await example6.waitForDisplayed({ reverse: true });
      await expect(example6).toBeEnabled();
    }
  });
});
