import {ExamplePage} from './example.po';
import {browser} from 'protractor';

describe('protractor-tutorial - Example page', () => {
  let page: ExamplePage;

  beforeEach(() => {
    page = new ExamplePage();
  });

  const data = {
    name: 'Some',
    lastName: 'Person'
  };

  it('when user go to example page and fill all fields he should see hello-message', () => {
    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('Here test example with form');
    page.fillFields(data);
    browser.switchTo().alert().accept();
  });
})
;
