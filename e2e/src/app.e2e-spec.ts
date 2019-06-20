import { browser, logging } from 'protractor';
import { MovieSite } from './movie-site.po';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {

  let movie_site: MovieSite;

  beforeEach(() => {
    movie_site = new MovieSite();
  });

  /*it('should type admin in input box', () => {
    movie_site.navigateToLogin();
    movie_site.loginWithAdmin();
    expect(movie_site.getAdminName()).toEqual('admin');
    browser.sleep(100);
  });

  it('should click log in', () => {
    movie_site.clickLogin();
    expect(movie_site.verifyLogin()).toBe('Welcome admin');
    browser.sleep(1000);
    //expect(component)
  });*/


  it('it should create a movie with title="django", releaseDate="1994", filmDirector="tarantino', () => {
    movie_site.navigateToCreateMovie();
    movie_site.inputTitle();
    movie_site.inputFilmDirector();
    movie_site.inputReleaseDate();
    movie_site.clickSubmitCreateMovie();
    browser.sleep(100);
  });

  /*

  it('should navigate to home and show WELCOME', () => {
    movie_site.navigateToHome();
    expect(movie_site.getHeadingText()).toEqual('WELCOME');
  });

  it('should enter a first name as batman', () => {
    movie_site.navigateToRegister();
    movie_site.enterUserName();
    movie_site.getUserName();
  });*/

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
