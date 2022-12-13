const {Builder, Capabilities, By } = require('selenium-webdriver')
const { addMovie, deleteMovie, addMultiple, crossMovie, showNotif } = require('./testModules')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/week_6/day_2/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// test('add a movie', async() => {
//     addMovie(driver, 'batman begins')
//     await driver.sleep(2000)
// })


// test('add multiple movies', async() => {
    //     addMultiple(driver, 'batman begins', 'batman ends')
    //     await driver.sleep(2000)
    // })

test('delete a movie', async() => {
    deleteMovie(driver, 'batman')
    await driver.sleep(2000)
})
    
test('cross out movie', async() => {
    crossMovie(driver, 'batman 2')
    await driver.sleep(2000)
})

test('notification shows up', async() => {
    showNotif(driver, 'batman 3')
    await driver.sleep(2000)
})