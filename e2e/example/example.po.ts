import {browser, by, element} from 'protractor';

export class ExamplePage {
  private credentias = {
    name: 'test',
    lastName: 'test'
  };

  navigateTo() {
    return browser.get('/example');
  }

  getPageTitleText() {
    return element(by.css('app-root h3')).getText();
  }

  fillFields(credentias: any = this.credentias) {
    element(by.css('[name="name"]')).sendKeys(credentias.name);
    element(by.css('[name="lastName"]')).sendKeys(credentias.lastName);
    element(by.css('[id="btnExample"]')).click();
  }
}
