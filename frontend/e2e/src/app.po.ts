import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  [x: string]: any;
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  /*async getTitleText(): Promise<string> {
    return element(by.css('app-root')).getText();
  }*/

  getHeader(): ElementFinder {
    return element(by.css('mat-toolbar'));
  }
  // check header is present or not
  isHeaderPresent(): promise.Promise<boolean> {
    return this.getHeader().isPresent();
  }
   getIcon()  {
    return element(by.css('mat-icon')).getText();
  }

  getTitleText()  {
    return element(by.css('span')).getText();
  }

  isFooterPresent(): promise.Promise<boolean> {
    return this.getHeader().isPresent();
  }
  


}
