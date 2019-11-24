import { Builder, WebDriver, Capabilities } from "selenium-webdriver";
import { LoginPage } from "../../pagesObject/login.po";
import { MainPage } from "../../pagesObject/main.po";
import { CalendarPage } from "../../pagesObject//calendar.po";
import { App } from "../../pagesObject/config.po";
import { SeleniumUtils } from "../../utils/se.utils";

interface IAssert {
  equal: (actual: Object, expected: Object) => void;
}

require("chromedriver");
const assert: IAssert = require("assert");

let capabilities = Capabilities.chrome();

capabilities.set("goog:chromeOptions", {
  args: ["--lang=en", "disable-infobars", "--disable-plugins"]
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

  /*it("Positive test", async function () {
    browser.go(App.url);
    await page.isLoad();
    await browser.keys(page.email(), App.user.login);
    await browser.keys(page.password(), App.user.password);
    await browser.click(page.submit());
    await calendarPage.isLoad();
    await assert.equal(await calendarPage.isPage(), true);
  });

  it("Negative test", async function () {
    debugger;
    browser.go(App.url);
    await page.isLoad();
    await browser.keys(page.email(), App.user.login);
    await browser.keys(page.password(), "qweqweqweqwe");
    await browser.click(page.submit());
    await page.isLoad();
    await assert.equal(await page.isPage(), true);
  });

  xit('Positive test', async function () {
    browser.go('https://ok.ru/');
    await driver.wait(await until.elementLocated(By.css('.form.js-login-form')), 5000).getText();
    await driver.findElement(By.css('input#field_email.it.h-mod')).sendKeys('anadasha@yandex.ru');
    await driver.findElement(By.css('input#field_password.it')).sendKeys('classmates');
    await driver.findElement(By.css('input.button-pro.__wide')).click();
    let exist = await driver.findElement(By.css('div#mainContent.narrow-feed.small-widgets.themes-disabled.mainContentDoubleColumn.gm-cl-aft')).then(() => true, () => false);
    await assert.equal(true, true);
  });*/


  it("Positive login ozon", async function () {
    browser.go(App.url);
    await main.isLoad();
    await browser.click(page.signin());
    await browser.click(page.byemail());
    await browser.keys(page.email(), App.user.login);
    await browser.keys(page.password(), App.user.password);
    await browser.click(page.submit());
    await assert.equal (await main.isMain(), true);
    //await assert.equal(await main.isLoad(), true);
  });

  /*it("Negative login ozon", async function () {
    browser.go(App.url);
    await page.isLoad();
    await driver.findElement(By.css('div.a3g0.a2w6')).click();
    browser.sleep(3000);
    await driver.findElement(By.css('.n5:first-child')).click();
    browser.sleep(3000);
    await browser.keys(page.email(), App.user.login);
    browser.sleep(3000);
    await browser.keys(page.password(), "qazxsw_0808");
    browser.sleep(3000);
    await browser.click(page.submit());
    browser.sleep(3000);
    let exist = await driver.findElement(By.css("div.a3a6")).then(() => true, () => false);
    await assert.equal(true, true);
  });*/


  after(() => driver && driver.quit());
});
