import { config as baseConfig } from "./wdio.shared.conf.ts";

export const config: WebdriverIO.Config = {
  ...baseConfig,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Android GoogleAPI Emulator",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
    },
  ],
};
