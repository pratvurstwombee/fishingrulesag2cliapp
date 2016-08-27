import { FishingRulesAg2CliAppPage } from './app.po';

describe('fishing-rules-ag2-cli-app App', function() {
  let page: FishingRulesAg2CliAppPage;

  beforeEach(() => {
    page = new FishingRulesAg2CliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
