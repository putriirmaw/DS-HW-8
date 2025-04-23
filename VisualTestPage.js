import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

class VisualTestPage {
    constructor(driver) {
        this.driver = driver;
    }

    async takeScreenshot(filename = 'homepage.png') {
        const screenshot = await this.driver.takeScreenshot();
        const screenshotPath = path.resolve(__dirname, '../screenshots', filename);
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log(`📸 Screenshot saved to: ${screenshotPath}`);
    }
    async takeScreenshot(filename = 'addtocart.png') {
        const screenshot = await this.driver.takeScreenshot();
        const screenshotPath = path.resolve(__dirname, '../screenshots', filename);
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log(`📸 Screenshot saved to: ${screenshotPath}`);
    }
}

export default VisualTestPage;
