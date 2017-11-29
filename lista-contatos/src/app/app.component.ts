import { Component } from '@angular/core';

import {ContatoModel} from './modelos/contato-model';
import {ContatosDataBaseService} from './servicos/contatos-data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de contatos';

  contatoclicado: ContatoModel;
  
  constructor(private dataBaseService: ContatosDataBaseService){}

  enviarDetalhe(id): void {
    this.contatoclicado = this.dataBaseService.getContato(id);
  }
}
