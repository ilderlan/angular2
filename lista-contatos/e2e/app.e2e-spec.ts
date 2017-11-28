import { ListaContatosPage } from './app.po';

describe('lista-contatos App', function() {
  let page: ListaContatosPage;

  beforeEach(() => {
    page = new ListaContatosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
