import { By } from 'selenium-webdriver';

class CartPage {
    constructor(driver) {
        this.driver = driver;
    }

    async goToCart() {
        const cart = await this.driver.findElement(By.className('shopping_cart_link'));
        await cart.click();
    }
}

export default CartPage;
