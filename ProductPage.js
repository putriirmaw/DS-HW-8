import { By } from 'selenium-webdriver';
class ProductPage {
    constructor(driver) {
        this.driver = driver;
    }

    async filterProducts() {
        const filter = await this.driver.findElement(By.className('product_sort_container'));
        await filter.click();
        const filterOption = await this.driver.findElement(By.xpath("//option[@value='za']"));
        await filterOption.click();
    }

    async addToCart() {
        const addToCart = await this.driver.findElement(By.id('add-to-cart-test.allthethings()-t-shirt-(red)'));
        await addToCart.click();
    }
}

export default ProductPage;
