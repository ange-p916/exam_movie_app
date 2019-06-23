import { browser, element, by, Key } from 'protractor';
import { retry } from 'rxjs/operators';


export class MovieSite {

  navigateToHome() {
    return browser.get('/home');
  }

  navigateToRegister() {
    return browser.get('/home/register');
  }

  navigateToLogin() {
    return browser.get('/home/login');
  }

  loginWithAdmin() {
    return element(by.id('username')).sendKeys('admin');
  }

  getAdminName() {
    return element(by.id('username')).getAttribute('value');
  }

  verifyLogin() {
    return element(by.css('h3')).getText();
  }

  clickLogin() {
    return element(by.id('login')).click();
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

  navigateToManageMovies() {
    return browser.get('/admin/manage-movies');
  }

  navigateToCreateMovie() {
    return browser.get('/admin/create-movie');
  }

  //-------search
  inputSearchBar() {
    return element(by.id('search')).sendKeys('django');
  }

  getInputSearchText() {
    return element(by.id('search')).getAttribute('value');
  }
  //-------------

  //------ start create movie
  inputTitle() {
    return element(by.id('title')).sendKeys('django');
  }

  inputFilmDirector() {
    return element(by.id('filmDirector')).sendKeys('tarantino');
  }

  inputReleaseDate() {
    return element(by.id('releaseDate')).sendKeys('1994');
  }

  clickSubmitCreateMovie() {
    return element(by.id('submit')).click();
  }
  //-----end create movie
}
