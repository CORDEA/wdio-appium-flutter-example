import {config as baseConfig} from './wdio.shared.conf.ts'

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 14 Pro Max',
        'appium:platformVersion': '17.0',
        'appium:automationName': 'XCUITest'
    }],
}
