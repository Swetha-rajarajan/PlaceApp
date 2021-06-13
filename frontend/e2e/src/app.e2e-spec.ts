import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display mat icon', async () => {
    await page.navigateTo();
    expect(await page.getIcon()).toEqual('menu');
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('menu');
  });

  it('should check header presentation on home page', () => {
    page.navigateTo();
    expect(page.isHeaderPresent()).toBeTruthy('<mat-toolbar> should exist in header.component.html');
  });

  it('should check header presentation on home page', () => {
    page.navigateTo();
    expect(page.isFooterPresent()).toBeTruthy('<mat-toolbar> should exist in footer.component.html');
  });

  it('Should Check register success', () => {
    browser.get('register');
  })

  it('Should Check Bookmark success', () => {
    browser.get('bookmark');
  })
  
  it('Should Check Company Review success', () => {
    browser.get('companyreview');
  })


  it('should navigate to dashboard page when login succeeds',()=>{
    browser.get('login');
    const inputElements = element.all(by.css('input'))
    inputElements.get(0).sendKeys('swetharaja');
    inputElements.get(1).sendKeys('Swetha@1')

    const button  = element(by.css('button'));
    button.click();
    expect(browser.getCurrentUrl()).toContain('dashboard')
    browser.sleep(1500);
  })

  it('should display error message when login fails',()=>{
    browser.get('login');
    const inputElements = element.all(by.css('input'))
    inputElements.get(0).sendKeys('swetharaja');
    inputElements.get(1).sendKeys('Swetha@1')

    const button  = element(by.css('button'));
    button.click();
    const errorElement = element(by.css('.errorMessage'))
    expect(errorElement.getText()).toContain('Entered Detailes are not correct');
    browser.sleep(1500);
  })

 /* afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });*/
});
