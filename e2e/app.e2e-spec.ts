import { InjectableServicePage } from './app.po';

describe('injectable-service App', () => {
  let page: InjectableServicePage;

  beforeEach(() => {
    page = new InjectableServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
