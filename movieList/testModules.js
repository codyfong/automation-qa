const { By } = require('selenium-webdriver')

const addMovie = async (driver, title) => {
    await driver.findElement(By.xpath('//input')).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    expect(await driver.findElement(By.xpath('//li/span')).getText()).toBe(title)
}

const deleteMovie = async (driver, title) => {
    await driver.findElement(By.xpath('//input')).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.id(title)).click()
    expect(await driver.findElement(By.xpath('//aside')).getText()).toBe(`${title} deleted!`)
    await driver.sleep(2000)
}

const addMultiple = async (driver, title, title2) => {
    await driver.findElement(By.xpath('//input')).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//input')).sendKeys(title2)
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)
    expect(await driver.findElement(By.xpath('//ul')).length).toBe(2)
}

const crossMovie = async(driver, title) => {
    await driver.findElement(By.xpath('//input')).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span')).click()
    expect(await driver.findElement(By.xpath('//aside')).getText()).toBe(`${title} watched!`)
}

const showNotif = async(driver, title) => {
    await driver.findElement(By.xpath('//input')).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span')).click()
    expect(await driver.findElement(By.xpath('//aside')).getText()).toBe(`${title} watched`)
}

module.exports = {
    addMovie, deleteMovie, addMultiple, crossMovie, showNotif
}