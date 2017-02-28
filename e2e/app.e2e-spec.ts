import { TodoItClientPage } from './app.po';

describe('todo-it-client App', () => {
  let page: TodoItClientPage;

  beforeEach(() => {
    page = new TodoItClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
