import { config as baseConfig } from "./wdio.shared.conf.ts";

export const config = {
  ...baseConfig,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Android GoogleAPI Emulator",
      "appium:platformVersion": "14.0",
      "appium:automationName": "UiAutomator2",
      "appium:disableIdLocatorAutocompletion": true,
    },
  ],
};
