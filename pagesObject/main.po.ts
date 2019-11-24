import { WebDriver, By } from "selenium-webdriver";
import { SeleniumUtils } from "../utils/se.utils";

export class MainPage {
    constructor(private browser: WebDriver) { }

    private seleniumUtils = new SeleniumUtils(this.browser);
    private find = (xPath: string) => { 
        return this.browser.findElement(By.xpath(xPath));
    }

    
    baner = () => this.find('//*[@class="a0h0 column__item_remove-margin"]');
    
    async isMain() {
        this.browser.sleep(3000);
        let url =  await this.browser.getCurrentUrl();
        return url == 'https://www.ozon.ru/';
        return await this.seleniumUtils.existElement(this.baner())
        }
    
    isLoad = () => this.seleniumUtils.wait('//*[contains(@class, "a9s7 column__item_remove-margin")]');
    };