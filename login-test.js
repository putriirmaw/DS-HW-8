const{Builder, By, until} = require('selenium-webdriver')
const assert = require('assert');

describe ('Search product by filter',function(){
    let driver;

    before(async function () {
        console.log('🔧 Setup sekali sebelum semua test...');
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ pageLoad: 10000, script: 10000 });
        await driver.get('https://www.saucedemo.com/');
      });

    

    it('Login to saucedemo',async function(){
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
    it('FIlter products',async function(){
        let filter = await driver.findElement(By.className('product_sort_container'));
        await filter.click();
        await driver.sleep(1000);
        let filterOption = await driver.findElement(By.xpath("//option[@value='za']"));
        await filterOption.click();
        // await driver.sleep(1000);
        
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');

        await driver.sleep(1000);
    })
    it('add to chart',async function(){
        let addToCart = await driver.findElement(By.id('add-to-cart-test.allthethings()-t-shirt-(red)'));
        await addToCart.click();
        await driver.sleep(1000);
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');
    })
    it('go to chart',async function(){
        let chart = await driver.findElement(By.className('shopping_cart_link'));
        await chart.click();
        await driver.sleep(1000);
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');
    })
    after(async function () {
        await driver.quit();
      });
})
