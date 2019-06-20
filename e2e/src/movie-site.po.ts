import { browser, element, by, Key } from 'protractor';


export class MovieSite {

  navigateToHome() {
    return browser.get('/home');
  }

  navigateToRegister() {
    return browser.get('/home/register');
  }

  enterUserName() {
    return element(by.id('firstName')).sendKeys('batman');
  }

  getUserName() {
    return element(by.id('firstName')).getAttribute('value');
  }

  getHeadingText() {
    return element(by.css('h2')).getText();
  }


}
