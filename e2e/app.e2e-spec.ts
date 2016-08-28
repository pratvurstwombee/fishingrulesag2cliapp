import { AG2CliAppPage } from './app.po';

describe('ag2-cli-app App', function() {
  let page: AG2CliAppPage;

  beforeEach(() => {
    page = new AG2CliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
