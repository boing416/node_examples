

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;



var driver = new webdriver.Builder().forBrowser('chrome').build();


driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys("wiki");
driver.findElement(By.name('btnG')).click();
driver.wait(check_title, 1000);
function check_title() {
    var promise = driver.getTitle().then(function (title) {

        if(title === 'wiki - Google Search')
        {
            console.log('Success');
            return true;
        }
        else{
            console.log('FAIL == ' + title);
        }

    });

    return promise;
}
