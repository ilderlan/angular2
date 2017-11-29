import { Component, OnInit, Input } from '@angular/core';

import {ContatoModel} from '../modelos/contato-model';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {

  @Input() contato:ContatoModel;

  constructor() { }

  ngOnInit() {
  }

}
