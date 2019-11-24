import { WebDriver, By } from "selenium-webdriver";
import { SeleniumUtils } from "../utils/se.utils";

export class MainPage {
    constructor(private browser: WebDriver) { }

    private seleniumUtils = new SeleniumUtils(this.browser);
    private find = (css: string) => {
        return this.browser.findElement(By.css(css));
    }


    baner = () => this.find('.a0h0.column__item_remove-margin');

    async isMain() {
        return await this.seleniumUtils.existElement(this.baner())
    }

    isLoad = () => this.seleniumUtils.wait('.a0h0.column__item_remove-margin');
};