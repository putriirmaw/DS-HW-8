import { By } from 'selenium-webdriver';

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async login(username, password) {
        await this.driver.findElement(By.id('user-name')).sendKeys(username);
        await this.driver.findElement(By.id('password')).sendKeys(password);
        await this.driver.findElement(By.id('login-button')).click();
    }
}

export default LoginPage;
