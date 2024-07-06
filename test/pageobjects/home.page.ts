import { driver } from "@wdio/globals";

class HomePage {
  get example1() {
    return driver.$("~example1");
  }

  get example2() {
    return driver.$("~example2-label\nexample2");
  }

  get example3() {
    return driver.$("~example3-id");
  }

  get example4() {
    return driver.$("~example4");
  }

  get example5() {
    return driver.$("~example5");
  }

  get example6() {
    return driver.$("~example6");
  }
}

export default new HomePage();
