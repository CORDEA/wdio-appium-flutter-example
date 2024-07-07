import { driver } from "@wdio/globals";

class HomePage {
  async example1() {
    const id = await driver.$("~example1");
    if (driver.isIOS) {
      const value = await driver.$("//*[@value='example1']");
      const name = await driver.$("//*[@name='example1']");
      const label = await driver.$("//*[@label='example1']");
      expect(id.elementId).toBe(value.elementId);
      expect(id.elementId).toBe(name.elementId);
      expect(id.elementId).toBe(label.elementId);
    } else {
      const desc = await driver.$("//*[@content-desc='example1']");
      expect(id.elementId).toBe(desc.elementId);
    }
    return id;
  }

  async example2() {
    const id = await driver.$("~example2-label\nexample2");
    if (driver.isIOS) {
      const value = await driver.$("//*[@value='example2-label\nexample2']");
      const name = await driver.$("//*[@name='example2-label\nexample2']");
      const label = await driver.$("//*[@label='example2-label\nexample2']");
      expect(id.elementId).toBe(value.elementId);
      expect(id.elementId).toBe(name.elementId);
      expect(id.elementId).toBe(label.elementId);
    } else {
      const desc = await driver.$(
        "//*[@content-desc='example2-label\nexample2']",
      );
      expect(id.elementId).toBe(desc.elementId);
    }
    return id;
  }

  async example3() {
    if (driver.isIOS) {
      const id = await driver.$("~example3-id");
      const value = await driver.$("//*[@value='example3']");
      const name = await driver.$("//*[@name='example3-id']");
      const label = await driver.$("//*[@label='example3']");
      expect(id.elementId).toBe(value.elementId);
      expect(id.elementId).toBe(name.elementId);
      expect(id.elementId).toBe(label.elementId);
      return id;
    } else {
      const aid = await driver.$("~example3");
      const id = await driver.$("id=example3-id");
      const desc = await driver.$("//*[@content-desc='example3']");
      const rid = await driver.$("//*[@resource-id='example3-id']");
      expect(aid.elementId).toBe(id.elementId);
      expect(aid.elementId).toBe(desc.elementId);
      expect(aid.elementId).toBe(rid.elementId);
      return aid;
    }
  }

  async example4() {
    if (driver.isIOS) {
      const id = await driver.$("~example4");
      const value = await driver.$("//*[@value='example4-value']");
      const name = await driver.$("//*[@name='example4']");
      const label = await driver.$("//*[@label='example4']");
      expect(id.elementId).toBe(value.elementId);
      expect(id.elementId).toBe(name.elementId);
      expect(id.elementId).toBe(label.elementId);
      return id;
    } else {
      const id = await driver.$("~example4-value, example4");
      const desc = await driver.$(
        "//*[@content-desc='example4-value, example4']",
      );
      expect(id.elementId).toBe(desc.elementId);
      return id;
    }
  }

  async example5() {
    const id = await driver.$("~example5");
    if (driver.isIOS) {
      const name = await driver.$("//*[@name='example5']");
      const label = await driver.$("//*[@label='example5']");
      expect(id.elementId).toBe(name.elementId);
      expect(id.elementId).toBe(label.elementId);
    } else {
      const desc = await driver.$("//*[@content-desc='example5']");
      expect(id.elementId).toBe(desc.elementId);
    }
    return id;
  }

  async example6() {
    if (driver.isIOS) {
      const id = await driver.$("~example6");
      const value = await driver.$("//*[@value='example6']");
      const name = await driver.$("//*[@name='example6']");
      const label = await driver.$("//*[@label='example6']");
      expect(id.elementId).toBe(value.elementId);
      expect(id.elementId).toBe(name.elementId);
      expect(id.elementId).toBe(label.elementId);
      return id;
    } else {
      // Not found.
    }
  }
}

export default new HomePage();
