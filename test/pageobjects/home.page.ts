import { driver } from "@wdio/globals";

class HomePage {
  async example1() {
    const id = await driver.$("~example1");
    const value = await driver.$("//*[@value='example1']");
    const name = await driver.$("//*[@name='example1']");
    const label = await driver.$("//*[@label='example1']");
    expect(id.elementId).toBe(value.elementId);
    expect(id.elementId).toBe(name.elementId);
    expect(id.elementId).toBe(label.elementId);
    return id;
  }

  async example2() {
    const id = await driver.$("~example2-label\nexample2");
    const value = await driver.$("//*[@value='example2-label\nexample2']");
    const name = await driver.$("//*[@name='example2-label\nexample2']");
    const label = await driver.$("//*[@label='example2-label\nexample2']");
    expect(id.elementId).toBe(value.elementId);
    expect(id.elementId).toBe(name.elementId);
    expect(id.elementId).toBe(label.elementId);
    return id;
  }

  async example3() {
    const id = await driver.$("~example3-id");
    const value = await driver.$("//*[@value='example3']");
    const name = await driver.$("//*[@name='example3-id']");
    const label = await driver.$("//*[@label='example3']");
    expect(id.elementId).toBe(value.elementId);
    expect(id.elementId).toBe(name.elementId);
    expect(id.elementId).toBe(label.elementId);
    return id;
  }

  async example4() {
    const id = await driver.$("~example4");
    const value = await driver.$("//*[@value='example4-value']");
    const name = await driver.$("//*[@name='example4']");
    const label = await driver.$("//*[@label='example4']");
    expect(id.elementId).toBe(value.elementId);
    expect(id.elementId).toBe(name.elementId);
    expect(id.elementId).toBe(label.elementId);
    return id;
  }

  async example5() {
    const id = await driver.$("~example5");
    const name = await driver.$("//*[@name='example5']");
    const label = await driver.$("//*[@label='example5']");
    expect(id.elementId).toBe(name.elementId);
    expect(id.elementId).toBe(label.elementId);
    return id;
  }

  async example6() {
    const id = await driver.$("~example6");
    const value = await driver.$("//*[@value='example6']");
    const name = await driver.$("//*[@name='example6']");
    const label = await driver.$("//*[@label='example6']");
    expect(id.elementId).toBe(value.elementId);
    expect(id.elementId).toBe(name.elementId);
    expect(id.elementId).toBe(label.elementId);
    return id;
  }
}

export default new HomePage();
