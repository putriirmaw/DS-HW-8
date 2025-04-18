const{Builder, By, until} = require('selenium-webdriver')
const assert = require('assert');

describe ('Search product by filter',function(){
    let driver;
    it('Login to saucedemo',async function(){
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get('https://www.saucedemo.com/')
        await driver.sleep(10000);
        
        let inputusername = await driver.findElement(By.id('user-name'));
        let inputpassword = await driver.findElement(By.id('password'));
        let buttonlogin = await driver.findElement(By.id('login-button'));
        
        await inputusername.sendKeys('standard_user')
        await inputpassword.sendKeys('secret_sauce')
        await buttonlogin.click()
        await driver.sleep(1000);
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');

    })
    it('FIlter prosucts',async function(){
        let filter = await driver.findElement(By.className('product_sort_container'));
        await filter.click();
        await driver.sleep(1000);
        let filterOption = await driver.findElement(By.xpath("//option[@value='za']"));
        await filterOption.click();
        // await driver.sleep(1000);
        
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');

        await driver.sleep(1000);
        await driver.quit();
    })
})