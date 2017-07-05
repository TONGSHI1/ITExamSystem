import { ITExamSystemPage } from './app.po';

describe('itexam-system App', () => {
  let page: ITExamSystemPage;

  beforeEach(() => {
    page = new ITExamSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
