import { CanWatchMoviesPipe } from './can-watch-movies.pipe';

describe('CanWatchMoviesPipe', () => {
  it('create an instance', () => {
    const pipe = new CanWatchMoviesPipe();
    expect(pipe).toBeTruthy();
  });
});
