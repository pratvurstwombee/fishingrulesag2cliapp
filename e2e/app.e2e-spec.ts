import { FishingRulesAG2CliAppPage } from './app.po';

describe('fishing-rules-ag2-cli-app App', function() {
  let page: FishingRulesAG2CliAppPage;

  beforeEach(() => {
    page = new FishingRulesAG2CliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
