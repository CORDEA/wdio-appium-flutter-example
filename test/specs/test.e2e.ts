import HomePage from "../pageobjects/home.page.ts";

describe("My application", () => {
  it("should login with valid credentials", async () => {
    await expect(HomePage.example1).toBeDisplayed();
    await expect(HomePage.example2).toBeDisplayed();
    await expect(HomePage.example3).toBeDisplayed();
    await expect(HomePage.example4).toBeDisplayed();
    await expect(HomePage.example5).toBeDisplayed();
    await HomePage.example6.waitForDisplayed({ reverse: true });
    await expect(HomePage.example6).toBeEnabled();
  });
});
