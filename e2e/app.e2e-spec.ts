import { ProjectNamePage } from './app.po';

describe('project-name App', () => {
  let page: ProjectNamePage;

  beforeEach(() => {
    page = new ProjectNamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
