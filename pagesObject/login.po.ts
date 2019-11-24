import { WebDriver, By } from "selenium-webdriver";
import { SeleniumUtils } from "../utils/se.utils";

export class LoginPage {
    constructor(private browser: WebDriver) { }

    private seleniumUtils = new SeleniumUtils(this.browser);
    private find = (xPath: string) => { 
    return this.browser.findElement(By.xpath(xPath));
    }

    signin = () => this.find('//*[contains(text(), "Войти")]');
    byemail = () => this.find('//*[contains(text(), "Войти по почте")]');
    email = () => this.find('//div/*[contains(text(),"Почта")]');
    password = () => this.find('//div/*[contains(text(),"Пароль")]');
    submit = () => this.find('//button/*[contains(text(),"Войти")]');
    
    
};
