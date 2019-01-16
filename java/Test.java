import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;


public class Test {
   public static void main(String[] args) {
    System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
    //        System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
            ChromeDriver driver = new ChromeDriver();
            System.out.println("Start");
            driver.navigate().to("https://power.dat.com/login?ReturnUrl=%2f");
    //        driver.findElement(By.cssSelector("#username")).sendKeys(new CharSequence[]{"chicagoan03"});
            driver.findElement(By.cssSelector("#username")).sendKeys(new CharSequence[]{"serkan1110"});
            driver.manage().timeouts().implicitlyWait(5L, TimeUnit.SECONDS);
    //        driver.findElement(By.cssSelector("#password")).sendKeys(new CharSequence[]{"Serkan03"});
            driver.findElement(By.cssSelector("#password")).sendKeys(new CharSequence[]{"03261990"});
            driver.manage().timeouts().implicitlyWait(5L, TimeUnit.SECONDS);
            driver.findElement(By.cssSelector("#login")).click();
            driver.manage().timeouts().implicitlyWait(10L, TimeUnit.SECONDS);
            driver.navigate().to("https://power.dat.com/search/loads");
            driver.findElement(By.cssSelector("#searchList > button")).click();
    //        driver.findElement(By.cssSelector("#s2id_autogen2")).sendKeys(new CharSequence[]{"Chicago, IL"});
            driver.findElement(By.cssSelector("#searchList > div.fixed-table-container-inner > div > div.clearfix.searchItem.isNew.searchForm.ng-scope > div.main-data.ng-scope > div.locations > div.origin > input")).sendKeys(new CharSequence[]{"Chicago, IL"});
            driver.findElement(By.cssSelector("#searchList > div.fixed-table-container-inner > div > div.clearfix.searchItem.isNew.searchForm.ng-scope > div.main-data.ng-scope > div.locations > div.dest > input")).sendKeys(new CharSequence[]{"Michigan City, IN"});
            driver.manage().timeouts().implicitlyWait(10L, TimeUnit.SECONDS);
            driver.findElement(By.cssSelector("#searchList > div.fixed-table-container-inner > div > div.clearfix.searchItem.isNew.searchForm.ng-scope > div.search-details.editMode.ng-scope > div > button.search.qa-search-button")).click();
   }
}