import { WebDriver, By } from "selenium-webdriver";
import { SeleniumUtils } from "../utils/se.utils";

export class LoginPage {
    constructor(private browser: WebDriver) { }

    private seleniumUtils = new SeleniumUtils(this.browser);
    private find = (cssPath: string) => { 
        return this.browser.findElement(By.css(cssPath));
    }

    email = () => this.find('[name="email"]');
    password = () => this.find('[name="password"]');
    submit = () => this.find('button.ui-n3.ui-o2.ui-o0.ui-n9.ui-a0.ui-b.a4q3');
    signin = () => this.find('//*[contains(text(), "Войти")]');

    async isPage() {
        this.browser.sleep(3000);
        let url =  await this.browser.getCurrentUrl();
        return url == 'https://www.ozon.ru/';
        }

    isLoad = () => this.seleniumUtils.wait('header.a2j0');
};

export class AddProduct {
    constructor(private browser: WebDriver) { }

    private seleniumUtils = new SeleniumUtils(this.browser);
    private find = (cssPath: string) => { 
        return this.browser.findElement(By.css(cssPath));
    }

    PageIs() {
        let blockOnLoginPage = this.find('div.b5q0');
        return this.seleniumUtils.existElement(blockOnLoginPage);
    }

    LoadIs = () => this.seleniumUtils.wait('a.ak3.a2n3');
};