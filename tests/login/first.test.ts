import { Builder, WebDriver, Capabilities } from "selenium-webdriver";
import { LoginPage } from "../../pagesObject/login.po";
import { MainPage } from "../../pagesObject/main.po";
import { App } from "../../pagesObject/config.po";
import { SeleniumUtils } from "../../utils/se.utils";

interface IAssert {
  equal: (actual: Object, expected: Object) => void;
}

require("chromedriver");
const assert: IAssert = require("assert");

let capabilities = Capabilities.chrome();

capabilities.set("goog:chromeOptions", {
  args: ["--lang=en", "disable-infobars", "--disable-plugins", "--headless", "--window-size=1920,1080"]
});

describe("Login form", function () {
  let driver: WebDriver;
  let page: LoginPage;
  let main: MainPage;
  let browser: SeleniumUtils;

  before(async function () {
    driver = await new Builder().withCapabilities(capabilities).build();
    page = new LoginPage(driver);
    main = new MainPage(driver);
    browser = new SeleniumUtils(driver);
  });

  it("Positive login ozon", async function () {
    browser.go(App.url);
    await main.isLoad();
    await browser.click(page.signin());
    await browser.click(page.emailButton());
    await browser.keys(page.email(), App.user.login);
    await browser.keys(page.password(), App.user.password);
    await browser.click(page.submit());
    await assert.equal (await main.isMain(), true);
  });

  after(() => driver && driver.quit());
});
